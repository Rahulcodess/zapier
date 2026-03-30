"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { AppNavbar } from "@/components/ui/navbar";
import { ZapCell } from "@/components/ui/zapcell";

type AvailableTrigger = {
  id: string;
  name: string;
  image: string;
};

type AvailableAction = {
  id: string;
  name: string;
  image: string;
};

type SelectedAction = {
  index: number;
  availableAction: AvailableAction;
};

export default function CreateZapPage() {
  const [selectedTrigger, setSelectedTrigger] = useState<{
    id: string;
    name: string;
    image: string;
  } | null>(null);
  const [selectedAction, setselectedAction] = useState<SelectedAction[]>([]);
  const [availableTriggers, setAvailableTriggers] = useState<AvailableTrigger[]>([]);
  const [availableActions, setAvailableActions] = useState<AvailableAction[]>([]);
  const [selectedmodalindex,setselectmodalindex]=useState<null|number>(null);

  const navItems = useMemo(
    () => [
      { name: "Dashboard", link: "/dashboard" },
      { name: "Zaps", link: "#zaps" },
    ],
    [],
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const [triggerResponse, actionResponse] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/v1/trigger/available`),
          axios.get(`${BACKEND_URL}/api/v1/action/available`),
        ]);

        const rawTriggers = triggerResponse.data?.availabletriggers ?? [];
        const rawActions = actionResponse.data?.availableActions ?? [];

        const triggers: AvailableTrigger[] = rawTriggers.map((item: any) => ({
          id: String(item.id ?? ""),
          name: String(item.name ?? "Trigger"),
          image: String(item.image ?? item.img ?? ""),
        }));
        const actions: AvailableAction[] = rawActions.map((item: any) => ({
          id: String(item.id ?? ""),
          name: String(item.name ?? "Action"),
          image: String(item.image ?? item.img ?? ""),
        }));

        setAvailableTriggers(triggers);
        if (triggers.length > 0) {
          setSelectedTrigger({
            id: triggers[0].id,
            name: triggers[0].name,
            image: triggers[0].image,
          });
        }
        setAvailableActions(actions);
      } catch (error) {
        console.error("Failed to load trigger/action options", error);
      }
    };

    loadData();
  }, []);

  const selectedModalItem = useMemo(() => {
    if (selectedmodalindex === null) return null;
    if (selectedmodalindex === 1) {
      return selectedTrigger
        ? {
            id: selectedTrigger.id,
            name: selectedTrigger.name,
            image: selectedTrigger.image,
          }
        : null;
    }
    const action = selectedAction.find((a) => a.index === selectedmodalindex);
    return action
      ? {
          id: action.availableAction.id,
          name: action.availableAction.name,
          image: action.availableAction.image,
        }
      : null;
  }, [selectedmodalindex, selectedTrigger, selectedAction]);

  const handlePickTrigger = (trigger: AvailableTrigger) => {
    setSelectedTrigger({ id: trigger.id, name: trigger.name, image: trigger.image });
    setselectmodalindex(null);
  };

  const handlePickAction = (action: AvailableAction) => {
    if (selectedmodalindex === null) return;

    setselectedAction((prev) => {
      const existingIdx = prev.findIndex((a) => a.index === selectedmodalindex);

      if (existingIdx >= 0) {
        return prev.map((a) =>
          a.index === selectedmodalindex
            ? {
                ...a,
                availableAction: action,
              }
            : a
        );
      }

      return [
        ...prev,
        {
          index: selectedmodalindex,
          availableAction: action,
        },
      ];
    });

    setselectmodalindex(null);
  };

  return (
    <div>
      <AppNavbar items={navItems} align="right" />
      <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center">
        <div className="flex justify-center w-full">
          
          <ZapCell onClick={()=>{
            setselectmodalindex(1);
          }} name={selectedTrigger ? selectedTrigger.name : "Trigger"} image={selectedTrigger?.image} index={1} />
        </div>
        <div className=" justify-center w-full">
          {selectedAction.map((action, index) => (
            <div
              key={`${action.availableAction.id || "action"}-${index}`}
              className="pt-2 flex justify-center"
            >
            <ZapCell onClick={()=>{
            setselectmodalindex(action.index);}}

              name={action.availableAction.name ? action.availableAction.name : "Action"}
              image={action.availableAction.image}
              index={2 + index}
            />
            </div>
             
          ))}
          <div className="flex justify-center">
               <div>
                    <button onClick={ () =>{
                      const nextAction = availableActions[0];
                      setselectedAction(a=>[...a,{
                        index:a.length+2,
                        availableAction: {
                          id: nextAction?.id ?? "",
                          name: nextAction?.name ?? "Action",
                          image: nextAction?.image ?? "",
                        },
                      }])
                    }}> <div className="text-2xl flex flex-col flex justify-center size-12 py-8 bg-black ">+
                        </div>
                    </button>
               </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-700 mt-4">
          Loaded: {availableTriggers.length} triggers, {availableActions.length} actions
        </div>
      </div>
      {selectedmodalindex !== null && (
        <Modal
          index={selectedmodalindex}
          selectedItem={selectedModalItem}
          availableTriggers={availableTriggers}
          availableActions={availableActions}
          onPickTrigger={handlePickTrigger}
          onPickAction={handlePickAction}
          onClose={() => setselectmodalindex(null)}
        />
      )}
    </div>
  );
}
function Modal({
  index,
  selectedItem,
  availableTriggers,
  availableActions,
  onPickTrigger,
  onPickAction,
  onClose,
}: {
  index: number;
  selectedItem: { id: string; name: string; image: string } | null;
  availableTriggers: AvailableTrigger[];
  availableActions: AvailableAction[];
  onPickTrigger: (trigger: AvailableTrigger) => void;
  onPickAction: (action: AvailableAction) => void;
  onClose: () => void;
}) {
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-y-auto bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
          <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
            <h3 className="text-lg font-medium text-heading">
              
            </h3>
            <button
              type="button"
              className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="mt-3 text-sm text-body">
            Selected:{" "}
            <span className="font-medium inline-flex items-center gap-2">
              {selectedItem?.image ? (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-5 h-5 rounded object-cover"
                />
              ) : null}
              {selectedItem?.name ?? "—"} ({selectedItem?.id ?? "—"})
            </span>
          </div>

          <div className="space-y-6 py-4 md:py-6">
            {index === 1 ? (
              <div>
                <div className="text-sm font-semibold text-heading mb-2">
                  Select Trigger
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {availableTriggers.map((t) => {
                    const selected = selectedItem?.id === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => onPickTrigger(t)}
                        className={`w-full text-left rounded-base border px-3 py-2 bg-white ${
                          selected ? "border-brand" : "border-default"
                        } hover:bg-neutral-tertiary`}
                      >
                        <div className="flex items-center gap-3">
                          {t.image ? (
                            <img src={t.image} alt={t.name} className="w-7 h-7 rounded object-cover" />
                          ) : (
                            <div className="w-7 h-7 rounded bg-slate-200" />
                          )}
                          <div>
                            <div className="font-medium">{t.name}</div>
                            <div className="text-xs text-body break-all">id: {t.id}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-sm font-semibold text-heading mb-2">
                  Select Action
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {availableActions.map((a) => {
                    const selected = selectedItem?.id === a.id;
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => onPickAction(a)}
                        className={`w-full text-left rounded-base border px-3 py-2 bg-white ${
                          selected ? "border-brand" : "border-default"
                        } hover:bg-neutral-tertiary`}
                      >
                        <div className="flex items-center gap-3">
                          {a.image ? (
                            <img src={a.image} alt={a.name} className="w-7 h-7 rounded object-cover" />
                          ) : (
                            <div className="w-7 h-7 rounded bg-slate-200" />
                          )}
                          <div>
                            <div className="font-medium">{a.name}</div>
                            <div className="text-xs text-body break-all">id: {a.id}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="hidden space-y-4 md:space-y-6 py-4 md:py-6">
            
           
          </div>

          <div className="hidden flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              onClick={onClose}
            >
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              onClick={onClose}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}