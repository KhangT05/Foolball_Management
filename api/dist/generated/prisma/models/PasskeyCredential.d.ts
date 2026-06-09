import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PasskeyCredential
 *
 */
export type PasskeyCredentialModel = runtime.Types.Result.DefaultSelection<Prisma.$PasskeyCredentialPayload>;
export type AggregatePasskeyCredential = {
    _count: PasskeyCredentialCountAggregateOutputType | null;
    _avg: PasskeyCredentialAvgAggregateOutputType | null;
    _sum: PasskeyCredentialSumAggregateOutputType | null;
    _min: PasskeyCredentialMinAggregateOutputType | null;
    _max: PasskeyCredentialMaxAggregateOutputType | null;
};
export type PasskeyCredentialAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    sign_count: number | null;
};
export type PasskeyCredentialSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    sign_count: bigint | null;
};
export type PasskeyCredentialMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    device_id: string | null;
    credential_id: string | null;
    public_key: string | null;
    sign_count: bigint | null;
    aaguid: string | null;
    is_backup_eligible: boolean | null;
    is_backed_up: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PasskeyCredentialMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    device_id: string | null;
    credential_id: string | null;
    public_key: string | null;
    sign_count: bigint | null;
    aaguid: string | null;
    is_backup_eligible: boolean | null;
    is_backed_up: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PasskeyCredentialCountAggregateOutputType = {
    id: number;
    user_id: number;
    device_id: number;
    credential_id: number;
    public_key: number;
    sign_count: number;
    aaguid: number;
    is_backup_eligible: number;
    is_backed_up: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PasskeyCredentialAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    sign_count?: true;
};
export type PasskeyCredentialSumAggregateInputType = {
    id?: true;
    user_id?: true;
    sign_count?: true;
};
export type PasskeyCredentialMinAggregateInputType = {
    id?: true;
    user_id?: true;
    device_id?: true;
    credential_id?: true;
    public_key?: true;
    sign_count?: true;
    aaguid?: true;
    is_backup_eligible?: true;
    is_backed_up?: true;
    created_at?: true;
    updated_at?: true;
};
export type PasskeyCredentialMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    device_id?: true;
    credential_id?: true;
    public_key?: true;
    sign_count?: true;
    aaguid?: true;
    is_backup_eligible?: true;
    is_backed_up?: true;
    created_at?: true;
    updated_at?: true;
};
export type PasskeyCredentialCountAggregateInputType = {
    id?: true;
    user_id?: true;
    device_id?: true;
    credential_id?: true;
    public_key?: true;
    sign_count?: true;
    aaguid?: true;
    is_backup_eligible?: true;
    is_backed_up?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PasskeyCredentialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PasskeyCredential to aggregate.
     */
    where?: Prisma.PasskeyCredentialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasskeyCredentials to fetch.
     */
    orderBy?: Prisma.PasskeyCredentialOrderByWithRelationInput | Prisma.PasskeyCredentialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PasskeyCredentialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasskeyCredentials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasskeyCredentials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PasskeyCredentials
    **/
    _count?: true | PasskeyCredentialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PasskeyCredentialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PasskeyCredentialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PasskeyCredentialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PasskeyCredentialMaxAggregateInputType;
};
export type GetPasskeyCredentialAggregateType<T extends PasskeyCredentialAggregateArgs> = {
    [P in keyof T & keyof AggregatePasskeyCredential]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePasskeyCredential[P]> : Prisma.GetScalarType<T[P], AggregatePasskeyCredential[P]>;
};
export type PasskeyCredentialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasskeyCredentialWhereInput;
    orderBy?: Prisma.PasskeyCredentialOrderByWithAggregationInput | Prisma.PasskeyCredentialOrderByWithAggregationInput[];
    by: Prisma.PasskeyCredentialScalarFieldEnum[] | Prisma.PasskeyCredentialScalarFieldEnum;
    having?: Prisma.PasskeyCredentialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PasskeyCredentialCountAggregateInputType | true;
    _avg?: PasskeyCredentialAvgAggregateInputType;
    _sum?: PasskeyCredentialSumAggregateInputType;
    _min?: PasskeyCredentialMinAggregateInputType;
    _max?: PasskeyCredentialMaxAggregateInputType;
};
export type PasskeyCredentialGroupByOutputType = {
    id: number;
    user_id: number;
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count: bigint;
    aaguid: string | null;
    is_backup_eligible: boolean;
    is_backed_up: boolean;
    created_at: Date;
    updated_at: Date | null;
    _count: PasskeyCredentialCountAggregateOutputType | null;
    _avg: PasskeyCredentialAvgAggregateOutputType | null;
    _sum: PasskeyCredentialSumAggregateOutputType | null;
    _min: PasskeyCredentialMinAggregateOutputType | null;
    _max: PasskeyCredentialMaxAggregateOutputType | null;
};
export type GetPasskeyCredentialGroupByPayload<T extends PasskeyCredentialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PasskeyCredentialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PasskeyCredentialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PasskeyCredentialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PasskeyCredentialGroupByOutputType[P]>;
}>>;
export type PasskeyCredentialWhereInput = {
    AND?: Prisma.PasskeyCredentialWhereInput | Prisma.PasskeyCredentialWhereInput[];
    OR?: Prisma.PasskeyCredentialWhereInput[];
    NOT?: Prisma.PasskeyCredentialWhereInput | Prisma.PasskeyCredentialWhereInput[];
    id?: Prisma.IntFilter<"PasskeyCredential"> | number;
    user_id?: Prisma.IntFilter<"PasskeyCredential"> | number;
    device_id?: Prisma.StringFilter<"PasskeyCredential"> | string;
    credential_id?: Prisma.StringFilter<"PasskeyCredential"> | string;
    public_key?: Prisma.StringFilter<"PasskeyCredential"> | string;
    sign_count?: Prisma.BigIntFilter<"PasskeyCredential"> | bigint | number;
    aaguid?: Prisma.StringNullableFilter<"PasskeyCredential"> | string | null;
    is_backup_eligible?: Prisma.BoolFilter<"PasskeyCredential"> | boolean;
    is_backed_up?: Prisma.BoolFilter<"PasskeyCredential"> | boolean;
    created_at?: Prisma.DateTimeFilter<"PasskeyCredential"> | Date | string;
    updated_at?: Prisma.DateTimeNullableFilter<"PasskeyCredential"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PasskeyCredentialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_backup_eligible?: Prisma.SortOrder;
    is_backed_up?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.PasskeyCredentialOrderByRelevanceInput;
};
export type PasskeyCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    credential_id?: string;
    AND?: Prisma.PasskeyCredentialWhereInput | Prisma.PasskeyCredentialWhereInput[];
    OR?: Prisma.PasskeyCredentialWhereInput[];
    NOT?: Prisma.PasskeyCredentialWhereInput | Prisma.PasskeyCredentialWhereInput[];
    user_id?: Prisma.IntFilter<"PasskeyCredential"> | number;
    device_id?: Prisma.StringFilter<"PasskeyCredential"> | string;
    public_key?: Prisma.StringFilter<"PasskeyCredential"> | string;
    sign_count?: Prisma.BigIntFilter<"PasskeyCredential"> | bigint | number;
    aaguid?: Prisma.StringNullableFilter<"PasskeyCredential"> | string | null;
    is_backup_eligible?: Prisma.BoolFilter<"PasskeyCredential"> | boolean;
    is_backed_up?: Prisma.BoolFilter<"PasskeyCredential"> | boolean;
    created_at?: Prisma.DateTimeFilter<"PasskeyCredential"> | Date | string;
    updated_at?: Prisma.DateTimeNullableFilter<"PasskeyCredential"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "credential_id">;
export type PasskeyCredentialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_backup_eligible?: Prisma.SortOrder;
    is_backed_up?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PasskeyCredentialCountOrderByAggregateInput;
    _avg?: Prisma.PasskeyCredentialAvgOrderByAggregateInput;
    _max?: Prisma.PasskeyCredentialMaxOrderByAggregateInput;
    _min?: Prisma.PasskeyCredentialMinOrderByAggregateInput;
    _sum?: Prisma.PasskeyCredentialSumOrderByAggregateInput;
};
export type PasskeyCredentialScalarWhereWithAggregatesInput = {
    AND?: Prisma.PasskeyCredentialScalarWhereWithAggregatesInput | Prisma.PasskeyCredentialScalarWhereWithAggregatesInput[];
    OR?: Prisma.PasskeyCredentialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PasskeyCredentialScalarWhereWithAggregatesInput | Prisma.PasskeyCredentialScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PasskeyCredential"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"PasskeyCredential"> | number;
    device_id?: Prisma.StringWithAggregatesFilter<"PasskeyCredential"> | string;
    credential_id?: Prisma.StringWithAggregatesFilter<"PasskeyCredential"> | string;
    public_key?: Prisma.StringWithAggregatesFilter<"PasskeyCredential"> | string;
    sign_count?: Prisma.BigIntWithAggregatesFilter<"PasskeyCredential"> | bigint | number;
    aaguid?: Prisma.StringNullableWithAggregatesFilter<"PasskeyCredential"> | string | null;
    is_backup_eligible?: Prisma.BoolWithAggregatesFilter<"PasskeyCredential"> | boolean;
    is_backed_up?: Prisma.BoolWithAggregatesFilter<"PasskeyCredential"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"PasskeyCredential"> | Date | string;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"PasskeyCredential"> | Date | string | null;
};
export type PasskeyCredentialCreateInput = {
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count?: bigint | number;
    aaguid?: string | null;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutPasskeyCredentialsInput;
};
export type PasskeyCredentialUncheckedCreateInput = {
    id?: number;
    user_id: number;
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count?: bigint | number;
    aaguid?: string | null;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
};
export type PasskeyCredentialUpdateInput = {
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutPasskeyCredentialsNestedInput;
};
export type PasskeyCredentialUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PasskeyCredentialCreateManyInput = {
    id?: number;
    user_id: number;
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count?: bigint | number;
    aaguid?: string | null;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
};
export type PasskeyCredentialUpdateManyMutationInput = {
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PasskeyCredentialUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PasskeyCredentialListRelationFilter = {
    every?: Prisma.PasskeyCredentialWhereInput;
    some?: Prisma.PasskeyCredentialWhereInput;
    none?: Prisma.PasskeyCredentialWhereInput;
};
export type PasskeyCredentialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PasskeyCredentialOrderByRelevanceInput = {
    fields: Prisma.PasskeyCredentialOrderByRelevanceFieldEnum | Prisma.PasskeyCredentialOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type PasskeyCredentialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrder;
    is_backup_eligible?: Prisma.SortOrder;
    is_backed_up?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PasskeyCredentialAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
};
export type PasskeyCredentialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrder;
    is_backup_eligible?: Prisma.SortOrder;
    is_backed_up?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PasskeyCredentialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrder;
    is_backup_eligible?: Prisma.SortOrder;
    is_backed_up?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PasskeyCredentialSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
};
export type PasskeyCredentialCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PasskeyCredentialCreateWithoutUserInput, Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput> | Prisma.PasskeyCredentialCreateWithoutUserInput[] | Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput | Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PasskeyCredentialCreateManyUserInputEnvelope;
    connect?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
};
export type PasskeyCredentialUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PasskeyCredentialCreateWithoutUserInput, Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput> | Prisma.PasskeyCredentialCreateWithoutUserInput[] | Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput | Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PasskeyCredentialCreateManyUserInputEnvelope;
    connect?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
};
export type PasskeyCredentialUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PasskeyCredentialCreateWithoutUserInput, Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput> | Prisma.PasskeyCredentialCreateWithoutUserInput[] | Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput | Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PasskeyCredentialUpsertWithWhereUniqueWithoutUserInput | Prisma.PasskeyCredentialUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PasskeyCredentialCreateManyUserInputEnvelope;
    set?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    disconnect?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    delete?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    connect?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    update?: Prisma.PasskeyCredentialUpdateWithWhereUniqueWithoutUserInput | Prisma.PasskeyCredentialUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PasskeyCredentialUpdateManyWithWhereWithoutUserInput | Prisma.PasskeyCredentialUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PasskeyCredentialScalarWhereInput | Prisma.PasskeyCredentialScalarWhereInput[];
};
export type PasskeyCredentialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PasskeyCredentialCreateWithoutUserInput, Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput> | Prisma.PasskeyCredentialCreateWithoutUserInput[] | Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput | Prisma.PasskeyCredentialCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PasskeyCredentialUpsertWithWhereUniqueWithoutUserInput | Prisma.PasskeyCredentialUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PasskeyCredentialCreateManyUserInputEnvelope;
    set?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    disconnect?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    delete?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    connect?: Prisma.PasskeyCredentialWhereUniqueInput | Prisma.PasskeyCredentialWhereUniqueInput[];
    update?: Prisma.PasskeyCredentialUpdateWithWhereUniqueWithoutUserInput | Prisma.PasskeyCredentialUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PasskeyCredentialUpdateManyWithWhereWithoutUserInput | Prisma.PasskeyCredentialUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PasskeyCredentialScalarWhereInput | Prisma.PasskeyCredentialScalarWhereInput[];
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type PasskeyCredentialCreateWithoutUserInput = {
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count?: bigint | number;
    aaguid?: string | null;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
};
export type PasskeyCredentialUncheckedCreateWithoutUserInput = {
    id?: number;
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count?: bigint | number;
    aaguid?: string | null;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
};
export type PasskeyCredentialCreateOrConnectWithoutUserInput = {
    where: Prisma.PasskeyCredentialWhereUniqueInput;
    create: Prisma.XOR<Prisma.PasskeyCredentialCreateWithoutUserInput, Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput>;
};
export type PasskeyCredentialCreateManyUserInputEnvelope = {
    data: Prisma.PasskeyCredentialCreateManyUserInput | Prisma.PasskeyCredentialCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PasskeyCredentialUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PasskeyCredentialWhereUniqueInput;
    update: Prisma.XOR<Prisma.PasskeyCredentialUpdateWithoutUserInput, Prisma.PasskeyCredentialUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PasskeyCredentialCreateWithoutUserInput, Prisma.PasskeyCredentialUncheckedCreateWithoutUserInput>;
};
export type PasskeyCredentialUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PasskeyCredentialWhereUniqueInput;
    data: Prisma.XOR<Prisma.PasskeyCredentialUpdateWithoutUserInput, Prisma.PasskeyCredentialUncheckedUpdateWithoutUserInput>;
};
export type PasskeyCredentialUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PasskeyCredentialScalarWhereInput;
    data: Prisma.XOR<Prisma.PasskeyCredentialUpdateManyMutationInput, Prisma.PasskeyCredentialUncheckedUpdateManyWithoutUserInput>;
};
export type PasskeyCredentialScalarWhereInput = {
    AND?: Prisma.PasskeyCredentialScalarWhereInput | Prisma.PasskeyCredentialScalarWhereInput[];
    OR?: Prisma.PasskeyCredentialScalarWhereInput[];
    NOT?: Prisma.PasskeyCredentialScalarWhereInput | Prisma.PasskeyCredentialScalarWhereInput[];
    id?: Prisma.IntFilter<"PasskeyCredential"> | number;
    user_id?: Prisma.IntFilter<"PasskeyCredential"> | number;
    device_id?: Prisma.StringFilter<"PasskeyCredential"> | string;
    credential_id?: Prisma.StringFilter<"PasskeyCredential"> | string;
    public_key?: Prisma.StringFilter<"PasskeyCredential"> | string;
    sign_count?: Prisma.BigIntFilter<"PasskeyCredential"> | bigint | number;
    aaguid?: Prisma.StringNullableFilter<"PasskeyCredential"> | string | null;
    is_backup_eligible?: Prisma.BoolFilter<"PasskeyCredential"> | boolean;
    is_backed_up?: Prisma.BoolFilter<"PasskeyCredential"> | boolean;
    created_at?: Prisma.DateTimeFilter<"PasskeyCredential"> | Date | string;
    updated_at?: Prisma.DateTimeNullableFilter<"PasskeyCredential"> | Date | string | null;
};
export type PasskeyCredentialCreateManyUserInput = {
    id?: number;
    device_id: string;
    credential_id: string;
    public_key: string;
    sign_count?: bigint | number;
    aaguid?: string | null;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
};
export type PasskeyCredentialUpdateWithoutUserInput = {
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PasskeyCredentialUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PasskeyCredentialUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.StringFieldUpdateOperationsInput | string;
    public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PasskeyCredentialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    device_id?: boolean;
    credential_id?: boolean;
    public_key?: boolean;
    sign_count?: boolean;
    aaguid?: boolean;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["passkeyCredential"]>;
export type PasskeyCredentialSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    device_id?: boolean;
    credential_id?: boolean;
    public_key?: boolean;
    sign_count?: boolean;
    aaguid?: boolean;
    is_backup_eligible?: boolean;
    is_backed_up?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type PasskeyCredentialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "device_id" | "credential_id" | "public_key" | "sign_count" | "aaguid" | "is_backup_eligible" | "is_backed_up" | "created_at" | "updated_at", ExtArgs["result"]["passkeyCredential"]>;
export type PasskeyCredentialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PasskeyCredentialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PasskeyCredential";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number;
        device_id: string;
        credential_id: string;
        public_key: string;
        sign_count: bigint;
        aaguid: string | null;
        is_backup_eligible: boolean;
        is_backed_up: boolean;
        created_at: Date;
        updated_at: Date | null;
    }, ExtArgs["result"]["passkeyCredential"]>;
    composites: {};
};
export type PasskeyCredentialGetPayload<S extends boolean | null | undefined | PasskeyCredentialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload, S>;
export type PasskeyCredentialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PasskeyCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PasskeyCredentialCountAggregateInputType | true;
};
export interface PasskeyCredentialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PasskeyCredential'];
        meta: {
            name: 'PasskeyCredential';
        };
    };
    /**
     * Find zero or one PasskeyCredential that matches the filter.
     * @param {PasskeyCredentialFindUniqueArgs} args - Arguments to find a PasskeyCredential
     * @example
     * // Get one PasskeyCredential
     * const passkeyCredential = await prisma.passkeyCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasskeyCredentialFindUniqueArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PasskeyCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasskeyCredentialFindUniqueOrThrowArgs} args - Arguments to find a PasskeyCredential
     * @example
     * // Get one PasskeyCredential
     * const passkeyCredential = await prisma.passkeyCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasskeyCredentialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PasskeyCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialFindFirstArgs} args - Arguments to find a PasskeyCredential
     * @example
     * // Get one PasskeyCredential
     * const passkeyCredential = await prisma.passkeyCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasskeyCredentialFindFirstArgs>(args?: Prisma.SelectSubset<T, PasskeyCredentialFindFirstArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PasskeyCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialFindFirstOrThrowArgs} args - Arguments to find a PasskeyCredential
     * @example
     * // Get one PasskeyCredential
     * const passkeyCredential = await prisma.passkeyCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasskeyCredentialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PasskeyCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PasskeyCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasskeyCredentials
     * const passkeyCredentials = await prisma.passkeyCredential.findMany()
     *
     * // Get first 10 PasskeyCredentials
     * const passkeyCredentials = await prisma.passkeyCredential.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const passkeyCredentialWithIdOnly = await prisma.passkeyCredential.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PasskeyCredentialFindManyArgs>(args?: Prisma.SelectSubset<T, PasskeyCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PasskeyCredential.
     * @param {PasskeyCredentialCreateArgs} args - Arguments to create a PasskeyCredential.
     * @example
     * // Create one PasskeyCredential
     * const PasskeyCredential = await prisma.passkeyCredential.create({
     *   data: {
     *     // ... data to create a PasskeyCredential
     *   }
     * })
     *
     */
    create<T extends PasskeyCredentialCreateArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialCreateArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PasskeyCredentials.
     * @param {PasskeyCredentialCreateManyArgs} args - Arguments to create many PasskeyCredentials.
     * @example
     * // Create many PasskeyCredentials
     * const passkeyCredential = await prisma.passkeyCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PasskeyCredentialCreateManyArgs>(args?: Prisma.SelectSubset<T, PasskeyCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a PasskeyCredential.
     * @param {PasskeyCredentialDeleteArgs} args - Arguments to delete one PasskeyCredential.
     * @example
     * // Delete one PasskeyCredential
     * const PasskeyCredential = await prisma.passkeyCredential.delete({
     *   where: {
     *     // ... filter to delete one PasskeyCredential
     *   }
     * })
     *
     */
    delete<T extends PasskeyCredentialDeleteArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialDeleteArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PasskeyCredential.
     * @param {PasskeyCredentialUpdateArgs} args - Arguments to update one PasskeyCredential.
     * @example
     * // Update one PasskeyCredential
     * const passkeyCredential = await prisma.passkeyCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PasskeyCredentialUpdateArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialUpdateArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PasskeyCredentials.
     * @param {PasskeyCredentialDeleteManyArgs} args - Arguments to filter PasskeyCredentials to delete.
     * @example
     * // Delete a few PasskeyCredentials
     * const { count } = await prisma.passkeyCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PasskeyCredentialDeleteManyArgs>(args?: Prisma.SelectSubset<T, PasskeyCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PasskeyCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasskeyCredentials
     * const passkeyCredential = await prisma.passkeyCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PasskeyCredentialUpdateManyArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one PasskeyCredential.
     * @param {PasskeyCredentialUpsertArgs} args - Arguments to update or create a PasskeyCredential.
     * @example
     * // Update or create a PasskeyCredential
     * const passkeyCredential = await prisma.passkeyCredential.upsert({
     *   create: {
     *     // ... data to create a PasskeyCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasskeyCredential we want to update
     *   }
     * })
     */
    upsert<T extends PasskeyCredentialUpsertArgs>(args: Prisma.SelectSubset<T, PasskeyCredentialUpsertArgs<ExtArgs>>): Prisma.Prisma__PasskeyCredentialClient<runtime.Types.Result.GetResult<Prisma.$PasskeyCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PasskeyCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialCountArgs} args - Arguments to filter PasskeyCredentials to count.
     * @example
     * // Count the number of PasskeyCredentials
     * const count = await prisma.passkeyCredential.count({
     *   where: {
     *     // ... the filter for the PasskeyCredentials we want to count
     *   }
     * })
    **/
    count<T extends PasskeyCredentialCountArgs>(args?: Prisma.Subset<T, PasskeyCredentialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PasskeyCredentialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PasskeyCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasskeyCredentialAggregateArgs>(args: Prisma.Subset<T, PasskeyCredentialAggregateArgs>): Prisma.PrismaPromise<GetPasskeyCredentialAggregateType<T>>;
    /**
     * Group by PasskeyCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCredentialGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PasskeyCredentialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PasskeyCredentialGroupByArgs['orderBy'];
    } : {
        orderBy?: PasskeyCredentialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PasskeyCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasskeyCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PasskeyCredential model
     */
    readonly fields: PasskeyCredentialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PasskeyCredential.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PasskeyCredentialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PasskeyCredential model
 */
export interface PasskeyCredentialFieldRefs {
    readonly id: Prisma.FieldRef<"PasskeyCredential", 'Int'>;
    readonly user_id: Prisma.FieldRef<"PasskeyCredential", 'Int'>;
    readonly device_id: Prisma.FieldRef<"PasskeyCredential", 'String'>;
    readonly credential_id: Prisma.FieldRef<"PasskeyCredential", 'String'>;
    readonly public_key: Prisma.FieldRef<"PasskeyCredential", 'String'>;
    readonly sign_count: Prisma.FieldRef<"PasskeyCredential", 'BigInt'>;
    readonly aaguid: Prisma.FieldRef<"PasskeyCredential", 'String'>;
    readonly is_backup_eligible: Prisma.FieldRef<"PasskeyCredential", 'Boolean'>;
    readonly is_backed_up: Prisma.FieldRef<"PasskeyCredential", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"PasskeyCredential", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"PasskeyCredential", 'DateTime'>;
}
/**
 * PasskeyCredential findUnique
 */
export type PasskeyCredentialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * Filter, which PasskeyCredential to fetch.
     */
    where: Prisma.PasskeyCredentialWhereUniqueInput;
};
/**
 * PasskeyCredential findUniqueOrThrow
 */
export type PasskeyCredentialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * Filter, which PasskeyCredential to fetch.
     */
    where: Prisma.PasskeyCredentialWhereUniqueInput;
};
/**
 * PasskeyCredential findFirst
 */
export type PasskeyCredentialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * Filter, which PasskeyCredential to fetch.
     */
    where?: Prisma.PasskeyCredentialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasskeyCredentials to fetch.
     */
    orderBy?: Prisma.PasskeyCredentialOrderByWithRelationInput | Prisma.PasskeyCredentialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PasskeyCredentials.
     */
    cursor?: Prisma.PasskeyCredentialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasskeyCredentials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasskeyCredentials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasskeyCredentials.
     */
    distinct?: Prisma.PasskeyCredentialScalarFieldEnum | Prisma.PasskeyCredentialScalarFieldEnum[];
};
/**
 * PasskeyCredential findFirstOrThrow
 */
export type PasskeyCredentialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * Filter, which PasskeyCredential to fetch.
     */
    where?: Prisma.PasskeyCredentialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasskeyCredentials to fetch.
     */
    orderBy?: Prisma.PasskeyCredentialOrderByWithRelationInput | Prisma.PasskeyCredentialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PasskeyCredentials.
     */
    cursor?: Prisma.PasskeyCredentialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasskeyCredentials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasskeyCredentials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasskeyCredentials.
     */
    distinct?: Prisma.PasskeyCredentialScalarFieldEnum | Prisma.PasskeyCredentialScalarFieldEnum[];
};
/**
 * PasskeyCredential findMany
 */
export type PasskeyCredentialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * Filter, which PasskeyCredentials to fetch.
     */
    where?: Prisma.PasskeyCredentialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasskeyCredentials to fetch.
     */
    orderBy?: Prisma.PasskeyCredentialOrderByWithRelationInput | Prisma.PasskeyCredentialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PasskeyCredentials.
     */
    cursor?: Prisma.PasskeyCredentialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasskeyCredentials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasskeyCredentials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasskeyCredentials.
     */
    distinct?: Prisma.PasskeyCredentialScalarFieldEnum | Prisma.PasskeyCredentialScalarFieldEnum[];
};
/**
 * PasskeyCredential create
 */
export type PasskeyCredentialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * The data needed to create a PasskeyCredential.
     */
    data: Prisma.XOR<Prisma.PasskeyCredentialCreateInput, Prisma.PasskeyCredentialUncheckedCreateInput>;
};
/**
 * PasskeyCredential createMany
 */
export type PasskeyCredentialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasskeyCredentials.
     */
    data: Prisma.PasskeyCredentialCreateManyInput | Prisma.PasskeyCredentialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PasskeyCredential update
 */
export type PasskeyCredentialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * The data needed to update a PasskeyCredential.
     */
    data: Prisma.XOR<Prisma.PasskeyCredentialUpdateInput, Prisma.PasskeyCredentialUncheckedUpdateInput>;
    /**
     * Choose, which PasskeyCredential to update.
     */
    where: Prisma.PasskeyCredentialWhereUniqueInput;
};
/**
 * PasskeyCredential updateMany
 */
export type PasskeyCredentialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PasskeyCredentials.
     */
    data: Prisma.XOR<Prisma.PasskeyCredentialUpdateManyMutationInput, Prisma.PasskeyCredentialUncheckedUpdateManyInput>;
    /**
     * Filter which PasskeyCredentials to update
     */
    where?: Prisma.PasskeyCredentialWhereInput;
    /**
     * Limit how many PasskeyCredentials to update.
     */
    limit?: number;
};
/**
 * PasskeyCredential upsert
 */
export type PasskeyCredentialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * The filter to search for the PasskeyCredential to update in case it exists.
     */
    where: Prisma.PasskeyCredentialWhereUniqueInput;
    /**
     * In case the PasskeyCredential found by the `where` argument doesn't exist, create a new PasskeyCredential with this data.
     */
    create: Prisma.XOR<Prisma.PasskeyCredentialCreateInput, Prisma.PasskeyCredentialUncheckedCreateInput>;
    /**
     * In case the PasskeyCredential was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PasskeyCredentialUpdateInput, Prisma.PasskeyCredentialUncheckedUpdateInput>;
};
/**
 * PasskeyCredential delete
 */
export type PasskeyCredentialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
    /**
     * Filter which PasskeyCredential to delete.
     */
    where: Prisma.PasskeyCredentialWhereUniqueInput;
};
/**
 * PasskeyCredential deleteMany
 */
export type PasskeyCredentialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PasskeyCredentials to delete
     */
    where?: Prisma.PasskeyCredentialWhereInput;
    /**
     * Limit how many PasskeyCredentials to delete.
     */
    limit?: number;
};
/**
 * PasskeyCredential without action
 */
export type PasskeyCredentialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasskeyCredential
     */
    select?: Prisma.PasskeyCredentialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasskeyCredential
     */
    omit?: Prisma.PasskeyCredentialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasskeyCredentialInclude<ExtArgs> | null;
};
//# sourceMappingURL=PasskeyCredential.d.ts.map