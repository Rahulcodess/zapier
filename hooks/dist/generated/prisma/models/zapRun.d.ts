import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model zapRun
 *
 */
export type zapRunModel = runtime.Types.Result.DefaultSelection<Prisma.$zapRunPayload>;
export type AggregateZapRun = {
    _count: ZapRunCountAggregateOutputType | null;
    _min: ZapRunMinAggregateOutputType | null;
    _max: ZapRunMaxAggregateOutputType | null;
};
export type ZapRunMinAggregateOutputType = {
    id: string | null;
    zapId: string | null;
};
export type ZapRunMaxAggregateOutputType = {
    id: string | null;
    zapId: string | null;
};
export type ZapRunCountAggregateOutputType = {
    id: number;
    zapId: number;
    _all: number;
};
export type ZapRunMinAggregateInputType = {
    id?: true;
    zapId?: true;
};
export type ZapRunMaxAggregateInputType = {
    id?: true;
    zapId?: true;
};
export type ZapRunCountAggregateInputType = {
    id?: true;
    zapId?: true;
    _all?: true;
};
export type ZapRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which zapRun to aggregate.
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: Prisma.zapRunOrderByWithRelationInput | Prisma.zapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.zapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned zapRuns
    **/
    _count?: true | ZapRunCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunMaxAggregateInputType;
};
export type GetZapRunAggregateType<T extends ZapRunAggregateArgs> = {
    [P in keyof T & keyof AggregateZapRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZapRun[P]> : Prisma.GetScalarType<T[P], AggregateZapRun[P]>;
};
export type zapRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.zapRunWhereInput;
    orderBy?: Prisma.zapRunOrderByWithAggregationInput | Prisma.zapRunOrderByWithAggregationInput[];
    by: Prisma.ZapRunScalarFieldEnum[] | Prisma.ZapRunScalarFieldEnum;
    having?: Prisma.zapRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZapRunCountAggregateInputType | true;
    _min?: ZapRunMinAggregateInputType;
    _max?: ZapRunMaxAggregateInputType;
};
export type ZapRunGroupByOutputType = {
    id: string;
    zapId: string;
    _count: ZapRunCountAggregateOutputType | null;
    _min: ZapRunMinAggregateOutputType | null;
    _max: ZapRunMaxAggregateOutputType | null;
};
type GetZapRunGroupByPayload<T extends zapRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZapRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZapRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZapRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZapRunGroupByOutputType[P]>;
}>>;
export type zapRunWhereInput = {
    AND?: Prisma.zapRunWhereInput | Prisma.zapRunWhereInput[];
    OR?: Prisma.zapRunWhereInput[];
    NOT?: Prisma.zapRunWhereInput | Prisma.zapRunWhereInput[];
    id?: Prisma.StringFilter<"zapRun"> | string;
    zapId?: Prisma.StringFilter<"zapRun"> | string;
    zap?: Prisma.XOR<Prisma.ZapScalarRelationFilter, Prisma.zapWhereInput>;
};
export type zapRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    zapId?: Prisma.SortOrder;
    zap?: Prisma.zapOrderByWithRelationInput;
};
export type zapRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.zapRunWhereInput | Prisma.zapRunWhereInput[];
    OR?: Prisma.zapRunWhereInput[];
    NOT?: Prisma.zapRunWhereInput | Prisma.zapRunWhereInput[];
    zapId?: Prisma.StringFilter<"zapRun"> | string;
    zap?: Prisma.XOR<Prisma.ZapScalarRelationFilter, Prisma.zapWhereInput>;
}, "id">;
export type zapRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    zapId?: Prisma.SortOrder;
    _count?: Prisma.zapRunCountOrderByAggregateInput;
    _max?: Prisma.zapRunMaxOrderByAggregateInput;
    _min?: Prisma.zapRunMinOrderByAggregateInput;
};
export type zapRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.zapRunScalarWhereWithAggregatesInput | Prisma.zapRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.zapRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.zapRunScalarWhereWithAggregatesInput | Prisma.zapRunScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"zapRun"> | string;
    zapId?: Prisma.StringWithAggregatesFilter<"zapRun"> | string;
};
export type zapRunCreateInput = {
    id?: string;
    zap: Prisma.zapCreateNestedOneWithoutZapRunInput;
};
export type zapRunUncheckedCreateInput = {
    id?: string;
    zapId: string;
};
export type zapRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zap?: Prisma.zapUpdateOneRequiredWithoutZapRunNestedInput;
};
export type zapRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zapId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunCreateManyInput = {
    id?: string;
    zapId: string;
};
export type zapRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zapId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ZapRunListRelationFilter = {
    every?: Prisma.zapRunWhereInput;
    some?: Prisma.zapRunWhereInput;
    none?: Prisma.zapRunWhereInput;
};
export type zapRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type zapRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zapId?: Prisma.SortOrder;
};
export type zapRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zapId?: Prisma.SortOrder;
};
export type zapRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zapId?: Prisma.SortOrder;
};
export type zapRunCreateNestedManyWithoutZapInput = {
    create?: Prisma.XOR<Prisma.zapRunCreateWithoutZapInput, Prisma.zapRunUncheckedCreateWithoutZapInput> | Prisma.zapRunCreateWithoutZapInput[] | Prisma.zapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?: Prisma.zapRunCreateOrConnectWithoutZapInput | Prisma.zapRunCreateOrConnectWithoutZapInput[];
    createMany?: Prisma.zapRunCreateManyZapInputEnvelope;
    connect?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
};
export type zapRunUncheckedCreateNestedManyWithoutZapInput = {
    create?: Prisma.XOR<Prisma.zapRunCreateWithoutZapInput, Prisma.zapRunUncheckedCreateWithoutZapInput> | Prisma.zapRunCreateWithoutZapInput[] | Prisma.zapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?: Prisma.zapRunCreateOrConnectWithoutZapInput | Prisma.zapRunCreateOrConnectWithoutZapInput[];
    createMany?: Prisma.zapRunCreateManyZapInputEnvelope;
    connect?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
};
export type zapRunUpdateManyWithoutZapNestedInput = {
    create?: Prisma.XOR<Prisma.zapRunCreateWithoutZapInput, Prisma.zapRunUncheckedCreateWithoutZapInput> | Prisma.zapRunCreateWithoutZapInput[] | Prisma.zapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?: Prisma.zapRunCreateOrConnectWithoutZapInput | Prisma.zapRunCreateOrConnectWithoutZapInput[];
    upsert?: Prisma.zapRunUpsertWithWhereUniqueWithoutZapInput | Prisma.zapRunUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: Prisma.zapRunCreateManyZapInputEnvelope;
    set?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    disconnect?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    delete?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    connect?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    update?: Prisma.zapRunUpdateWithWhereUniqueWithoutZapInput | Prisma.zapRunUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?: Prisma.zapRunUpdateManyWithWhereWithoutZapInput | Prisma.zapRunUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: Prisma.zapRunScalarWhereInput | Prisma.zapRunScalarWhereInput[];
};
export type zapRunUncheckedUpdateManyWithoutZapNestedInput = {
    create?: Prisma.XOR<Prisma.zapRunCreateWithoutZapInput, Prisma.zapRunUncheckedCreateWithoutZapInput> | Prisma.zapRunCreateWithoutZapInput[] | Prisma.zapRunUncheckedCreateWithoutZapInput[];
    connectOrCreate?: Prisma.zapRunCreateOrConnectWithoutZapInput | Prisma.zapRunCreateOrConnectWithoutZapInput[];
    upsert?: Prisma.zapRunUpsertWithWhereUniqueWithoutZapInput | Prisma.zapRunUpsertWithWhereUniqueWithoutZapInput[];
    createMany?: Prisma.zapRunCreateManyZapInputEnvelope;
    set?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    disconnect?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    delete?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    connect?: Prisma.zapRunWhereUniqueInput | Prisma.zapRunWhereUniqueInput[];
    update?: Prisma.zapRunUpdateWithWhereUniqueWithoutZapInput | Prisma.zapRunUpdateWithWhereUniqueWithoutZapInput[];
    updateMany?: Prisma.zapRunUpdateManyWithWhereWithoutZapInput | Prisma.zapRunUpdateManyWithWhereWithoutZapInput[];
    deleteMany?: Prisma.zapRunScalarWhereInput | Prisma.zapRunScalarWhereInput[];
};
export type zapRunCreateWithoutZapInput = {
    id?: string;
};
export type zapRunUncheckedCreateWithoutZapInput = {
    id?: string;
};
export type zapRunCreateOrConnectWithoutZapInput = {
    where: Prisma.zapRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.zapRunCreateWithoutZapInput, Prisma.zapRunUncheckedCreateWithoutZapInput>;
};
export type zapRunCreateManyZapInputEnvelope = {
    data: Prisma.zapRunCreateManyZapInput | Prisma.zapRunCreateManyZapInput[];
    skipDuplicates?: boolean;
};
export type zapRunUpsertWithWhereUniqueWithoutZapInput = {
    where: Prisma.zapRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.zapRunUpdateWithoutZapInput, Prisma.zapRunUncheckedUpdateWithoutZapInput>;
    create: Prisma.XOR<Prisma.zapRunCreateWithoutZapInput, Prisma.zapRunUncheckedCreateWithoutZapInput>;
};
export type zapRunUpdateWithWhereUniqueWithoutZapInput = {
    where: Prisma.zapRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.zapRunUpdateWithoutZapInput, Prisma.zapRunUncheckedUpdateWithoutZapInput>;
};
export type zapRunUpdateManyWithWhereWithoutZapInput = {
    where: Prisma.zapRunScalarWhereInput;
    data: Prisma.XOR<Prisma.zapRunUpdateManyMutationInput, Prisma.zapRunUncheckedUpdateManyWithoutZapInput>;
};
export type zapRunScalarWhereInput = {
    AND?: Prisma.zapRunScalarWhereInput | Prisma.zapRunScalarWhereInput[];
    OR?: Prisma.zapRunScalarWhereInput[];
    NOT?: Prisma.zapRunScalarWhereInput | Prisma.zapRunScalarWhereInput[];
    id?: Prisma.StringFilter<"zapRun"> | string;
    zapId?: Prisma.StringFilter<"zapRun"> | string;
};
export type zapRunCreateManyZapInput = {
    id?: string;
};
export type zapRunUpdateWithoutZapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunUncheckedUpdateWithoutZapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunUncheckedUpdateManyWithoutZapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type zapRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zapId?: boolean;
    zap?: boolean | Prisma.zapDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zapRun"]>;
export type zapRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zapId?: boolean;
    zap?: boolean | Prisma.zapDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zapRun"]>;
export type zapRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zapId?: boolean;
    zap?: boolean | Prisma.zapDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zapRun"]>;
export type zapRunSelectScalar = {
    id?: boolean;
    zapId?: boolean;
};
export type zapRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "zapId", ExtArgs["result"]["zapRun"]>;
export type zapRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zap?: boolean | Prisma.zapDefaultArgs<ExtArgs>;
};
export type zapRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zap?: boolean | Prisma.zapDefaultArgs<ExtArgs>;
};
export type zapRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zap?: boolean | Prisma.zapDefaultArgs<ExtArgs>;
};
export type $zapRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "zapRun";
    objects: {
        zap: Prisma.$zapPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        zapId: string;
    }, ExtArgs["result"]["zapRun"]>;
    composites: {};
};
export type zapRunGetPayload<S extends boolean | null | undefined | zapRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$zapRunPayload, S>;
export type zapRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<zapRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZapRunCountAggregateInputType | true;
};
export interface zapRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['zapRun'];
        meta: {
            name: 'zapRun';
        };
    };
    /**
     * Find zero or one ZapRun that matches the filter.
     * @param {zapRunFindUniqueArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapRunFindUniqueArgs>(args: Prisma.SelectSubset<T, zapRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ZapRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapRunFindUniqueOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, zapRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ZapRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindFirstArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapRunFindFirstArgs>(args?: Prisma.SelectSubset<T, zapRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ZapRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindFirstOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, zapRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRun.findMany()
     *
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRun.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.findMany({ select: { id: true } })
     *
     */
    findMany<T extends zapRunFindManyArgs>(args?: Prisma.SelectSubset<T, zapRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ZapRun.
     * @param {zapRunCreateArgs} args - Arguments to create a ZapRun.
     * @example
     * // Create one ZapRun
     * const ZapRun = await prisma.zapRun.create({
     *   data: {
     *     // ... data to create a ZapRun
     *   }
     * })
     *
     */
    create<T extends zapRunCreateArgs>(args: Prisma.SelectSubset<T, zapRunCreateArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ZapRuns.
     * @param {zapRunCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends zapRunCreateManyArgs>(args?: Prisma.SelectSubset<T, zapRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {zapRunCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends zapRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, zapRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ZapRun.
     * @param {zapRunDeleteArgs} args - Arguments to delete one ZapRun.
     * @example
     * // Delete one ZapRun
     * const ZapRun = await prisma.zapRun.delete({
     *   where: {
     *     // ... filter to delete one ZapRun
     *   }
     * })
     *
     */
    delete<T extends zapRunDeleteArgs>(args: Prisma.SelectSubset<T, zapRunDeleteArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ZapRun.
     * @param {zapRunUpdateArgs} args - Arguments to update one ZapRun.
     * @example
     * // Update one ZapRun
     * const zapRun = await prisma.zapRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends zapRunUpdateArgs>(args: Prisma.SelectSubset<T, zapRunUpdateArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ZapRuns.
     * @param {zapRunDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends zapRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, zapRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends zapRunUpdateManyArgs>(args: Prisma.SelectSubset<T, zapRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ZapRuns and returns the data updated in the database.
     * @param {zapRunUpdateManyAndReturnArgs} args - Arguments to update many ZapRuns.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends zapRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, zapRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ZapRun.
     * @param {zapRunUpsertArgs} args - Arguments to update or create a ZapRun.
     * @example
     * // Update or create a ZapRun
     * const zapRun = await prisma.zapRun.upsert({
     *   create: {
     *     // ... data to create a ZapRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRun we want to update
     *   }
     * })
     */
    upsert<T extends zapRunUpsertArgs>(args: Prisma.SelectSubset<T, zapRunUpsertArgs<ExtArgs>>): Prisma.Prisma__zapRunClient<runtime.Types.Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRun.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
    **/
    count<T extends zapRunCountArgs>(args?: Prisma.Subset<T, zapRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZapRunCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZapRunAggregateArgs>(args: Prisma.Subset<T, ZapRunAggregateArgs>): Prisma.PrismaPromise<GetZapRunAggregateType<T>>;
    /**
     * Group by ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunGroupByArgs} args - Group by arguments.
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
    groupBy<T extends zapRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: zapRunGroupByArgs['orderBy'];
    } : {
        orderBy?: zapRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, zapRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the zapRun model
     */
    readonly fields: zapRunFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for zapRun.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__zapRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zap<T extends Prisma.zapDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.zapDefaultArgs<ExtArgs>>): Prisma.Prisma__zapClient<runtime.Types.Result.GetResult<Prisma.$zapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the zapRun model
 */
export interface zapRunFieldRefs {
    readonly id: Prisma.FieldRef<"zapRun", 'String'>;
    readonly zapId: Prisma.FieldRef<"zapRun", 'String'>;
}
/**
 * zapRun findUnique
 */
export type zapRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which zapRun to fetch.
     */
    where: Prisma.zapRunWhereUniqueInput;
};
/**
 * zapRun findUniqueOrThrow
 */
export type zapRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which zapRun to fetch.
     */
    where: Prisma.zapRunWhereUniqueInput;
};
/**
 * zapRun findFirst
 */
export type zapRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which zapRun to fetch.
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: Prisma.zapRunOrderByWithRelationInput | Prisma.zapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for zapRuns.
     */
    cursor?: Prisma.zapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of zapRuns.
     */
    distinct?: Prisma.ZapRunScalarFieldEnum | Prisma.ZapRunScalarFieldEnum[];
};
/**
 * zapRun findFirstOrThrow
 */
export type zapRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which zapRun to fetch.
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: Prisma.zapRunOrderByWithRelationInput | Prisma.zapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for zapRuns.
     */
    cursor?: Prisma.zapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of zapRuns.
     */
    distinct?: Prisma.ZapRunScalarFieldEnum | Prisma.ZapRunScalarFieldEnum[];
};
/**
 * zapRun findMany
 */
export type zapRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which zapRuns to fetch.
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: Prisma.zapRunOrderByWithRelationInput | Prisma.zapRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing zapRuns.
     */
    cursor?: Prisma.zapRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` zapRuns.
     */
    skip?: number;
    distinct?: Prisma.ZapRunScalarFieldEnum | Prisma.ZapRunScalarFieldEnum[];
};
/**
 * zapRun create
 */
export type zapRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a zapRun.
     */
    data: Prisma.XOR<Prisma.zapRunCreateInput, Prisma.zapRunUncheckedCreateInput>;
};
/**
 * zapRun createMany
 */
export type zapRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many zapRuns.
     */
    data: Prisma.zapRunCreateManyInput | Prisma.zapRunCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * zapRun createManyAndReturn
 */
export type zapRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: Prisma.zapRunSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRun
     */
    omit?: Prisma.zapRunOmit<ExtArgs> | null;
    /**
     * The data used to create many zapRuns.
     */
    data: Prisma.zapRunCreateManyInput | Prisma.zapRunCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * zapRun update
 */
export type zapRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a zapRun.
     */
    data: Prisma.XOR<Prisma.zapRunUpdateInput, Prisma.zapRunUncheckedUpdateInput>;
    /**
     * Choose, which zapRun to update.
     */
    where: Prisma.zapRunWhereUniqueInput;
};
/**
 * zapRun updateMany
 */
export type zapRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update zapRuns.
     */
    data: Prisma.XOR<Prisma.zapRunUpdateManyMutationInput, Prisma.zapRunUncheckedUpdateManyInput>;
    /**
     * Filter which zapRuns to update
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * Limit how many zapRuns to update.
     */
    limit?: number;
};
/**
 * zapRun updateManyAndReturn
 */
export type zapRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: Prisma.zapRunSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the zapRun
     */
    omit?: Prisma.zapRunOmit<ExtArgs> | null;
    /**
     * The data used to update zapRuns.
     */
    data: Prisma.XOR<Prisma.zapRunUpdateManyMutationInput, Prisma.zapRunUncheckedUpdateManyInput>;
    /**
     * Filter which zapRuns to update
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * Limit how many zapRuns to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.zapRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * zapRun upsert
 */
export type zapRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the zapRun to update in case it exists.
     */
    where: Prisma.zapRunWhereUniqueInput;
    /**
     * In case the zapRun found by the `where` argument doesn't exist, create a new zapRun with this data.
     */
    create: Prisma.XOR<Prisma.zapRunCreateInput, Prisma.zapRunUncheckedCreateInput>;
    /**
     * In case the zapRun was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.zapRunUpdateInput, Prisma.zapRunUncheckedUpdateInput>;
};
/**
 * zapRun delete
 */
export type zapRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which zapRun to delete.
     */
    where: Prisma.zapRunWhereUniqueInput;
};
/**
 * zapRun deleteMany
 */
export type zapRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which zapRuns to delete
     */
    where?: Prisma.zapRunWhereInput;
    /**
     * Limit how many zapRuns to delete.
     */
    limit?: number;
};
/**
 * zapRun without action
 */
export type zapRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=zapRun.d.ts.map