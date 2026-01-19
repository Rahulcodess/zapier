import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model zap
 *
 */
export type zapModel = runtime.Types.Result.DefaultSelection<Prisma.$zapPayload>;
export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null;
    _min: ZapMinAggregateOutputType | null;
    _max: ZapMaxAggregateOutputType | null;
};
export type ZapMinAggregateOutputType = {
    id: string | null;
    Triggerid: string | null;
};
export type ZapMaxAggregateOutputType = {
    id: string | null;
    Triggerid: string | null;
};
export type ZapCountAggregateOutputType = {
    id: number;
    Triggerid: number;
    _all: number;
};
export type ZapMinAggregateInputType = {
    id?: true;
    Triggerid?: true;
};
export type ZapMaxAggregateInputType = {
    id?: true;
    Triggerid?: true;
};
export type ZapCountAggregateInputType = {
    id?: true;
    Triggerid?: true;
    _all?: true;
};
export type ZapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which zap to aggregate.
     */
    where?: Prisma.zapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zaps to fetch.
     */
    orderBy?: Prisma.zapOrderByWithRelationInput | Prisma.zapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.zapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned zaps
    **/
    _count?: true | ZapCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType;
};
export type GetZapAggregateType<T extends ZapAggregateArgs> = {
    [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZap[P]> : Prisma.GetScalarType<T[P], AggregateZap[P]>;
};
export type zapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zapWhereInput;
    orderBy?: Prisma.zapOrderByWithAggregationInput | Prisma.zapOrderByWithAggregationInput[];
    by: Prisma.ZapScalarFieldEnum[] | Prisma.ZapScalarFieldEnum;
    having?: Prisma.zapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapCountAggregateInputType | true;
    _min?: ZapMinAggregateInputType;
    _max?: ZapMaxAggregateInputType;
};
export type ZapGroupByOutputType = {
    id: string;
    Triggerid: string;
    _count: ZapCountAggregateOutputType | null;
    _min: ZapMinAggregateOutputType | null;
    _max: ZapMaxAggregateOutputType | null;
};
type GetZapGroupByPayload<T extends zapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZapGroupByOutputType[P]>;
}>>;
export type zapWhereInput = {
    AND?: Prisma.zapWhereInput | Prisma.zapWhereInput[];
    OR?: Prisma.zapWhereInput[];
    NOT?: Prisma.zapWhereInput | Prisma.zapWhereInput[];
    id?: Prisma.StringFilter<"zap"> | string;
    Triggerid?: Prisma.StringFilter<"zap"> | string;
    Trigger?: Prisma.XOR<Prisma.TriggerNullableScalarRelationFilter, Prisma.TriggerWhereInput> | null;
    actions?: Prisma.ActionListRelationFilter;
    zapRun?: Prisma.ZapRunListRelationFilter;
};
export type zapOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    Triggerid?: Prisma.SortOrder;
    Trigger?: Prisma.TriggerOrderByWithRelationInput;
    actions?: Prisma.ActionOrderByRelationAggregateInput;
    zapRun?: Prisma.zapRunOrderByRelationAggregateInput;
};
export type zapWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.zapWhereInput | Prisma.zapWhereInput[];
    OR?: Prisma.zapWhereInput[];
    NOT?: Prisma.zapWhereInput | Prisma.zapWhereInput[];
    Triggerid?: Prisma.StringFilter<"zap"> | string;
    Trigger?: Prisma.XOR<Prisma.TriggerNullableScalarRelationFilter, Prisma.TriggerWhereInput> | null;
    actions?: Prisma.ActionListRelationFilter;
    zapRun?: Prisma.ZapRunListRelationFilter;
}, "id">;
export type zapOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    Triggerid?: Prisma.SortOrder;
    _count?: Prisma.zapCountOrderByAggregateInput;
    _max?: Prisma.zapMaxOrderByAggregateInput;
    _min?: Prisma.zapMinOrderByAggregateInput;
};
export type zapScalarWhereWithAggregatesInput = {
    AND?: Prisma.zapScalarWhereWithAggregatesInput | Prisma.zapScalarWhereWithAggregatesInput[];
    OR?: Prisma.zapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.zapScalarWhereWithAggregatesInput | Prisma.zapScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"zap"> | string;
    Triggerid?: Prisma.StringWithAggregatesFilter<"zap"> | string;
};
export type zapCreateInput = {
    id?: string;
    Triggerid: string;
    Trigger?: Prisma.TriggerCreateNestedOneWithoutZapInput;
    actions?: Prisma.ActionCreateNestedManyWithoutZapInput;
    zapRun?: Prisma.zapRunCreateNestedManyWithoutZapInput;
};
export type zapUncheckedCreateInput = {
    id?: string;
    Triggerid: string;
    Trigger?: Prisma.TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: Prisma.ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRun?: Prisma.zapRunUncheckedCreateNestedManyWithoutZapInput;
};
export type zapUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    Trigger?: Prisma.TriggerUpdateOneWithoutZapNestedInput;
    actions?: Prisma.ActionUpdateManyWithoutZapNestedInput;
    zapRun?: Prisma.zapRunUpdateManyWithoutZapNestedInput;
};
export type zapUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    Trigger?: Prisma.TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: Prisma.ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRun?: Prisma.zapRunUncheckedUpdateManyWithoutZapNestedInput;
};
export type zapCreateManyInput = {
    id?: string;
    Triggerid: string;
};
export type zapUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    Triggerid?: Prisma.SortOrder;
};
export type zapMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    Triggerid?: Prisma.SortOrder;
};
export type zapMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    Triggerid?: Prisma.SortOrder;
};
export type ZapScalarRelationFilter = {
    is?: Prisma.zapWhereInput;
    isNot?: Prisma.zapWhereInput;
};
export type zapCreateNestedOneWithoutTriggerInput = {
    create?: Prisma.XOR<Prisma.zapCreateWithoutTriggerInput, Prisma.zapUncheckedCreateWithoutTriggerInput>;
    connectOrCreate?: Prisma.zapCreateOrConnectWithoutTriggerInput;
    connect?: Prisma.zapWhereUniqueInput;
};
export type zapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: Prisma.XOR<Prisma.zapCreateWithoutTriggerInput, Prisma.zapUncheckedCreateWithoutTriggerInput>;
    connectOrCreate?: Prisma.zapCreateOrConnectWithoutTriggerInput;
    upsert?: Prisma.zapUpsertWithoutTriggerInput;
    connect?: Prisma.zapWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zapUpdateToOneWithWhereWithoutTriggerInput, Prisma.zapUpdateWithoutTriggerInput>, Prisma.zapUncheckedUpdateWithoutTriggerInput>;
};
export type zapCreateNestedOneWithoutActionsInput = {
    create?: Prisma.XOR<Prisma.zapCreateWithoutActionsInput, Prisma.zapUncheckedCreateWithoutActionsInput>;
    connectOrCreate?: Prisma.zapCreateOrConnectWithoutActionsInput;
    connect?: Prisma.zapWhereUniqueInput;
};
export type zapUpdateOneRequiredWithoutActionsNestedInput = {
    create?: Prisma.XOR<Prisma.zapCreateWithoutActionsInput, Prisma.zapUncheckedCreateWithoutActionsInput>;
    connectOrCreate?: Prisma.zapCreateOrConnectWithoutActionsInput;
    upsert?: Prisma.zapUpsertWithoutActionsInput;
    connect?: Prisma.zapWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zapUpdateToOneWithWhereWithoutActionsInput, Prisma.zapUpdateWithoutActionsInput>, Prisma.zapUncheckedUpdateWithoutActionsInput>;
};
export type zapCreateNestedOneWithoutZapRunInput = {
    create?: Prisma.XOR<Prisma.zapCreateWithoutZapRunInput, Prisma.zapUncheckedCreateWithoutZapRunInput>;
    connectOrCreate?: Prisma.zapCreateOrConnectWithoutZapRunInput;
    connect?: Prisma.zapWhereUniqueInput;
};
export type zapUpdateOneRequiredWithoutZapRunNestedInput = {
    create?: Prisma.XOR<Prisma.zapCreateWithoutZapRunInput, Prisma.zapUncheckedCreateWithoutZapRunInput>;
    connectOrCreate?: Prisma.zapCreateOrConnectWithoutZapRunInput;
    upsert?: Prisma.zapUpsertWithoutZapRunInput;
    connect?: Prisma.zapWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.zapUpdateToOneWithWhereWithoutZapRunInput, Prisma.zapUpdateWithoutZapRunInput>, Prisma.zapUncheckedUpdateWithoutZapRunInput>;
};
export type zapCreateWithoutTriggerInput = {
    id?: string;
    Triggerid: string;
    actions?: Prisma.ActionCreateNestedManyWithoutZapInput;
    zapRun?: Prisma.zapRunCreateNestedManyWithoutZapInput;
};
export type zapUncheckedCreateWithoutTriggerInput = {
    id?: string;
    Triggerid: string;
    actions?: Prisma.ActionUncheckedCreateNestedManyWithoutZapInput;
    zapRun?: Prisma.zapRunUncheckedCreateNestedManyWithoutZapInput;
};
export type zapCreateOrConnectWithoutTriggerInput = {
    where: Prisma.zapWhereUniqueInput;
    create: Prisma.XOR<Prisma.zapCreateWithoutTriggerInput, Prisma.zapUncheckedCreateWithoutTriggerInput>;
};
export type zapUpsertWithoutTriggerInput = {
    update: Prisma.XOR<Prisma.zapUpdateWithoutTriggerInput, Prisma.zapUncheckedUpdateWithoutTriggerInput>;
    create: Prisma.XOR<Prisma.zapCreateWithoutTriggerInput, Prisma.zapUncheckedCreateWithoutTriggerInput>;
    where?: Prisma.zapWhereInput;
};
export type zapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: Prisma.zapWhereInput;
    data: Prisma.XOR<Prisma.zapUpdateWithoutTriggerInput, Prisma.zapUncheckedUpdateWithoutTriggerInput>;
};
export type zapUpdateWithoutTriggerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    actions?: Prisma.ActionUpdateManyWithoutZapNestedInput;
    zapRun?: Prisma.zapRunUpdateManyWithoutZapNestedInput;
};
export type zapUncheckedUpdateWithoutTriggerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    actions?: Prisma.ActionUncheckedUpdateManyWithoutZapNestedInput;
    zapRun?: Prisma.zapRunUncheckedUpdateManyWithoutZapNestedInput;
};
export type zapCreateWithoutActionsInput = {
    id?: string;
    Triggerid: string;
    Trigger?: Prisma.TriggerCreateNestedOneWithoutZapInput;
    zapRun?: Prisma.zapRunCreateNestedManyWithoutZapInput;
};
export type zapUncheckedCreateWithoutActionsInput = {
    id?: string;
    Triggerid: string;
    Trigger?: Prisma.TriggerUncheckedCreateNestedOneWithoutZapInput;
    zapRun?: Prisma.zapRunUncheckedCreateNestedManyWithoutZapInput;
};
export type zapCreateOrConnectWithoutActionsInput = {
    where: Prisma.zapWhereUniqueInput;
    create: Prisma.XOR<Prisma.zapCreateWithoutActionsInput, Prisma.zapUncheckedCreateWithoutActionsInput>;
};
export type zapUpsertWithoutActionsInput = {
    update: Prisma.XOR<Prisma.zapUpdateWithoutActionsInput, Prisma.zapUncheckedUpdateWithoutActionsInput>;
    create: Prisma.XOR<Prisma.zapCreateWithoutActionsInput, Prisma.zapUncheckedCreateWithoutActionsInput>;
    where?: Prisma.zapWhereInput;
};
export type zapUpdateToOneWithWhereWithoutActionsInput = {
    where?: Prisma.zapWhereInput;
    data: Prisma.XOR<Prisma.zapUpdateWithoutActionsInput, Prisma.zapUncheckedUpdateWithoutActionsInput>;
};
export type zapUpdateWithoutActionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    Trigger?: Prisma.TriggerUpdateOneWithoutZapNestedInput;
    zapRun?: Prisma.zapRunUpdateManyWithoutZapNestedInput;
};
export type zapUncheckedUpdateWithoutActionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    Trigger?: Prisma.TriggerUncheckedUpdateOneWithoutZapNestedInput;
    zapRun?: Prisma.zapRunUncheckedUpdateManyWithoutZapNestedInput;
};
export type zapCreateWithoutZapRunInput = {
    id?: string;
    Triggerid: string;
    Trigger?: Prisma.TriggerCreateNestedOneWithoutZapInput;
    actions?: Prisma.ActionCreateNestedManyWithoutZapInput;
};
export type zapUncheckedCreateWithoutZapRunInput = {
    id?: string;
    Triggerid: string;
    Trigger?: Prisma.TriggerUncheckedCreateNestedOneWithoutZapInput;
    actions?: Prisma.ActionUncheckedCreateNestedManyWithoutZapInput;
};
export type zapCreateOrConnectWithoutZapRunInput = {
    where: Prisma.zapWhereUniqueInput;
    create: Prisma.XOR<Prisma.zapCreateWithoutZapRunInput, Prisma.zapUncheckedCreateWithoutZapRunInput>;
};
export type zapUpsertWithoutZapRunInput = {
    update: Prisma.XOR<Prisma.zapUpdateWithoutZapRunInput, Prisma.zapUncheckedUpdateWithoutZapRunInput>;
    create: Prisma.XOR<Prisma.zapCreateWithoutZapRunInput, Prisma.zapUncheckedCreateWithoutZapRunInput>;
    where?: Prisma.zapWhereInput;
};
export type zapUpdateToOneWithWhereWithoutZapRunInput = {
    where?: Prisma.zapWhereInput;
    data: Prisma.XOR<Prisma.zapUpdateWithoutZapRunInput, Prisma.zapUncheckedUpdateWithoutZapRunInput>;
};
export type zapUpdateWithoutZapRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    Trigger?: Prisma.TriggerUpdateOneWithoutZapNestedInput;
    actions?: Prisma.ActionUpdateManyWithoutZapNestedInput;
};
export type zapUncheckedUpdateWithoutZapRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    Triggerid?: Prisma.StringFieldUpdateOperationsInput | string;
    Trigger?: Prisma.TriggerUncheckedUpdateOneWithoutZapNestedInput;
    actions?: Prisma.ActionUncheckedUpdateManyWithoutZapNestedInput;
};
/**
 * Count Type ZapCountOutputType
 */
export type ZapCountOutputType = {
    actions: number;
    zapRun: number;
};
export type ZapCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actions?: boolean | ZapCountOutputTypeCountActionsArgs;
    zapRun?: boolean | ZapCountOutputTypeCountZapRunArgs;
};
/**
 * ZapCountOutputType without action
 */
export type ZapCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: Prisma.ZapCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ZapCountOutputType without action
 */
export type ZapCountOutputTypeCountActionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActionWhereInput;
};
/**
 * ZapCountOutputType without action
 */
export type ZapCountOutputTypeCountZapRunArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zapRunWhereInput;
};
export type zapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    Triggerid?: boolean;
    Trigger?: boolean | Prisma.zap$TriggerArgs<ExtArgs>;
    actions?: boolean | Prisma.zap$actionsArgs<ExtArgs>;
    zapRun?: boolean | Prisma.zap$zapRunArgs<ExtArgs>;
    _count?: boolean | Prisma.ZapCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zap"]>;
export type zapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    Triggerid?: boolean;
}, ExtArgs["result"]["zap"]>;
export type zapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    Triggerid?: boolean;
}, ExtArgs["result"]["zap"]>;
export type zapSelectScalar = {
    id?: boolean;
    Triggerid?: boolean;
};
export type zapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "Triggerid", ExtArgs["result"]["zap"]>;
export type zapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Trigger?: boolean | Prisma.zap$TriggerArgs<ExtArgs>;
    actions?: boolean | Prisma.zap$actionsArgs<ExtArgs>;
    zapRun?: boolean | Prisma.zap$zapRunArgs<ExtArgs>;
    _count?: boolean | Prisma.ZapCountOutputTypeDefaultArgs<ExtArgs>;
};
export type zapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type zapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $zapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "zap";
    objects: {
        Trigger: Prisma.$TriggerPayload<ExtArgs> | null;
        actions: Prisma.$ActionPayload<ExtArgs>[];
        zapRun: Prisma.$zapRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        Triggerid: string;
    }, ExtArgs["result"]["zap"]>;
    composites: {};
};
export type zapGetPayload<S extends boolean | null | undefined | zapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$zapPayload, S>;
export type zapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<zapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZapCountAggregateInputType | true;
};
export interface zapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['zap'];
        meta: {
            name: 'zap';
        };
    };
    /**
     * Find zero or one Zap that matches the filter.
     * @param {zapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapFindUniqueArgs>(args: Prisma.SelectSubset<T, zapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, zapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapFindFirstArgs>(args?: Prisma.SelectSubset<T, zapFindFirstArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, zapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     *
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     *
     */
    findMany<T extends zapFindManyArgs>(args?: Prisma.SelectSubset<T, zapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Zap.
     * @param {zapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     *
     */
    create<T extends zapCreateArgs>(args: Prisma.SelectSubset<T, zapCreateArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Zaps.
     * @param {zapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends zapCreateManyArgs>(args?: Prisma.SelectSubset<T, zapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {zapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends zapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, zapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Zap.
     * @param {zapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     *
     */
    delete<T extends zapDeleteArgs>(args: Prisma.SelectSubset<T, zapDeleteArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Zap.
     * @param {zapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends zapUpdateArgs>(args: Prisma.SelectSubset<T, zapUpdateArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Zaps.
     * @param {zapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends zapDeleteManyArgs>(args?: Prisma.SelectSubset<T, zapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends zapUpdateManyArgs>(args: Prisma.SelectSubset<T, zapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Zaps and returns the data updated in the database.
     * @param {zapUpdateManyAndReturnArgs} args - Arguments to update many Zaps.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends zapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, zapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Zap.
     * @param {zapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends zapUpsertArgs>(args: Prisma.SelectSubset<T, zapUpsertArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends zapCountArgs>(args?: Prisma.Subset<T, zapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZapCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapAggregateArgs>(args: Prisma.Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>;
    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends zapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: zapGroupByArgs['orderBy'];
    } : {
        orderBy?: zapGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, zapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the zap model
     */
    readonly fields: zapFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for zap.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__zapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Trigger<T extends Prisma.zap$TriggerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zap$TriggerArgs<ExtArgs>>): Prisma.Prisma__TriggerClient<runtime.Types.Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    actions<T extends Prisma.zap$actionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zap$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    zapRun<T extends Prisma.zap$zapRunArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zap$zapRunArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the zap model
 */
export interface zapFieldRefs {
    readonly id: Prisma.FieldRef<"zap", 'String'>;
    readonly Triggerid: Prisma.FieldRef<"zap", 'String'>;
}
/**
 * zap findUnique
 */
export type zapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * Filter, which zap to fetch.
     */
    where: Prisma.zapWhereUniqueInput;
};
/**
 * zap findUniqueOrThrow
 */
export type zapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * Filter, which zap to fetch.
     */
    where: Prisma.zapWhereUniqueInput;
};
/**
 * zap findFirst
 */
export type zapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * Filter, which zap to fetch.
     */
    where?: Prisma.zapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zaps to fetch.
     */
    orderBy?: Prisma.zapOrderByWithRelationInput | Prisma.zapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for zaps.
     */
    cursor?: Prisma.zapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of zaps.
     */
    distinct?: Prisma.ZapScalarFieldEnum | Prisma.ZapScalarFieldEnum[];
};
/**
 * zap findFirstOrThrow
 */
export type zapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * Filter, which zap to fetch.
     */
    where?: Prisma.zapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zaps to fetch.
     */
    orderBy?: Prisma.zapOrderByWithRelationInput | Prisma.zapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for zaps.
     */
    cursor?: Prisma.zapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of zaps.
     */
    distinct?: Prisma.ZapScalarFieldEnum | Prisma.ZapScalarFieldEnum[];
};
/**
 * zap findMany
 */
export type zapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * Filter, which zaps to fetch.
     */
    where?: Prisma.zapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zaps to fetch.
     */
    orderBy?: Prisma.zapOrderByWithRelationInput | Prisma.zapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing zaps.
     */
    cursor?: Prisma.zapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zaps.
     */
    skip?: number;
    distinct?: Prisma.ZapScalarFieldEnum | Prisma.ZapScalarFieldEnum[];
};
/**
 * zap create
 */
export type zapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * The data needed to create a zap.
     */
    data: Prisma.XOR<Prisma.zapCreateInput, Prisma.zapUncheckedCreateInput>;
};
/**
 * zap createMany
 */
export type zapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many zaps.
     */
    data: Prisma.zapCreateManyInput | Prisma.zapCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * zap createManyAndReturn
 */
export type zapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * The data used to create many zaps.
     */
    data: Prisma.zapCreateManyInput | Prisma.zapCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * zap update
 */
export type zapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * The data needed to update a zap.
     */
    data: Prisma.XOR<Prisma.zapUpdateInput, Prisma.zapUncheckedUpdateInput>;
    /**
     * Choose, which zap to update.
     */
    where: Prisma.zapWhereUniqueInput;
};
/**
 * zap updateMany
 */
export type zapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update zaps.
     */
    data: Prisma.XOR<Prisma.zapUpdateManyMutationInput, Prisma.zapUncheckedUpdateManyInput>;
    /**
     * Filter which zaps to update
     */
    where?: Prisma.zapWhereInput;
    /**
     * Limit how many zaps to update.
     */
    limit?: number;
};
/**
 * zap updateManyAndReturn
 */
export type zapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * The data used to update zaps.
     */
    data: Prisma.XOR<Prisma.zapUpdateManyMutationInput, Prisma.zapUncheckedUpdateManyInput>;
    /**
     * Filter which zaps to update
     */
    where?: Prisma.zapWhereInput;
    /**
     * Limit how many zaps to update.
     */
    limit?: number;
};
/**
 * zap upsert
 */
export type zapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * The filter to search for the zap to update in case it exists.
     */
    where: Prisma.zapWhereUniqueInput;
    /**
     * In case the zap found by the `where` argument doesn't exist, create a new zap with this data.
     */
    create: Prisma.XOR<Prisma.zapCreateInput, Prisma.zapUncheckedCreateInput>;
    /**
     * In case the zap was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.zapUpdateInput, Prisma.zapUncheckedUpdateInput>;
};
/**
 * zap delete
 */
export type zapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
    /**
     * Filter which zap to delete.
     */
    where: Prisma.zapWhereUniqueInput;
};
/**
 * zap deleteMany
 */
export type zapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which zaps to delete
     */
    where?: Prisma.zapWhereInput;
    /**
     * Limit how many zaps to delete.
     */
    limit?: number;
};
/**
 * zap.Trigger
 */
export type zap$TriggerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: Prisma.TriggerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trigger
     */
    omit?: Prisma.TriggerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TriggerInclude<ExtArgs> | null;
    where?: Prisma.TriggerWhereInput;
};
/**
 * zap.actions
 */
export type zap$actionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: Prisma.ActionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Action
     */
    omit?: Prisma.ActionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActionInclude<ExtArgs> | null;
    where?: Prisma.ActionWhereInput;
    orderBy?: Prisma.ActionOrderByWithRelationInput | Prisma.ActionOrderByWithRelationInput[];
    cursor?: Prisma.ActionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActionScalarFieldEnum | Prisma.ActionScalarFieldEnum[];
};
/**
 * zap.zapRun
 */
export type zap$zapRunArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: Prisma.zapRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRun
     */
    omit?: Prisma.zapRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunInclude<ExtArgs> | null;
    where?: Prisma.zapRunWhereInput;
    orderBy?: Prisma.zapRunOrderByWithRelationInput | Prisma.zapRunOrderByWithRelationInput[];
    cursor?: Prisma.zapRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZapRunScalarFieldEnum | Prisma.ZapRunScalarFieldEnum[];
};
/**
 * zap without action
 */
export type zapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zap
     */
    select?: Prisma.zapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the zap
     */
    omit?: Prisma.zapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=zap.d.ts.map