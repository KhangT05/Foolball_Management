import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User_Role
 *
 */
export type User_RoleModel = runtime.Types.Result.DefaultSelection<Prisma.$User_RolePayload>;
export type AggregateUser_Role = {
    _count: User_RoleCountAggregateOutputType | null;
    _avg: User_RoleAvgAggregateOutputType | null;
    _sum: User_RoleSumAggregateOutputType | null;
    _min: User_RoleMinAggregateOutputType | null;
    _max: User_RoleMaxAggregateOutputType | null;
};
export type User_RoleAvgAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
};
export type User_RoleSumAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
};
export type User_RoleMinAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
};
export type User_RoleMaxAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
};
export type User_RoleCountAggregateOutputType = {
    user_id: number;
    role_id: number;
    _all: number;
};
export type User_RoleAvgAggregateInputType = {
    user_id?: true;
    role_id?: true;
};
export type User_RoleSumAggregateInputType = {
    user_id?: true;
    role_id?: true;
};
export type User_RoleMinAggregateInputType = {
    user_id?: true;
    role_id?: true;
};
export type User_RoleMaxAggregateInputType = {
    user_id?: true;
    role_id?: true;
};
export type User_RoleCountAggregateInputType = {
    user_id?: true;
    role_id?: true;
    _all?: true;
};
export type User_RoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User_Role to aggregate.
     */
    where?: Prisma.User_RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: Prisma.User_RoleOrderByWithRelationInput | Prisma.User_RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.User_RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned User_Roles
    **/
    _count?: true | User_RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: User_RoleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: User_RoleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: User_RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: User_RoleMaxAggregateInputType;
};
export type GetUser_RoleAggregateType<T extends User_RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_Role]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_Role[P]> : Prisma.GetScalarType<T[P], AggregateUser_Role[P]>;
};
export type User_RoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_RoleWhereInput;
    orderBy?: Prisma.User_RoleOrderByWithAggregationInput | Prisma.User_RoleOrderByWithAggregationInput[];
    by: Prisma.User_RoleScalarFieldEnum[] | Prisma.User_RoleScalarFieldEnum;
    having?: Prisma.User_RoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_RoleCountAggregateInputType | true;
    _avg?: User_RoleAvgAggregateInputType;
    _sum?: User_RoleSumAggregateInputType;
    _min?: User_RoleMinAggregateInputType;
    _max?: User_RoleMaxAggregateInputType;
};
export type User_RoleGroupByOutputType = {
    user_id: number;
    role_id: number;
    _count: User_RoleCountAggregateOutputType | null;
    _avg: User_RoleAvgAggregateOutputType | null;
    _sum: User_RoleSumAggregateOutputType | null;
    _min: User_RoleMinAggregateOutputType | null;
    _max: User_RoleMaxAggregateOutputType | null;
};
export type GetUser_RoleGroupByPayload<T extends User_RoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_RoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_RoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_RoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_RoleGroupByOutputType[P]>;
}>>;
export type User_RoleWhereInput = {
    AND?: Prisma.User_RoleWhereInput | Prisma.User_RoleWhereInput[];
    OR?: Prisma.User_RoleWhereInput[];
    NOT?: Prisma.User_RoleWhereInput | Prisma.User_RoleWhereInput[];
    user_id?: Prisma.IntFilter<"User_Role"> | number;
    role_id?: Prisma.IntFilter<"User_Role"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type User_RoleOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    role?: Prisma.RoleOrderByWithRelationInput;
};
export type User_RoleWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: Prisma.User_RoleUser_idRole_idCompoundUniqueInput;
    AND?: Prisma.User_RoleWhereInput | Prisma.User_RoleWhereInput[];
    OR?: Prisma.User_RoleWhereInput[];
    NOT?: Prisma.User_RoleWhereInput | Prisma.User_RoleWhereInput[];
    user_id?: Prisma.IntFilter<"User_Role"> | number;
    role_id?: Prisma.IntFilter<"User_Role"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "user_id_role_id">;
export type User_RoleOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    _count?: Prisma.User_RoleCountOrderByAggregateInput;
    _avg?: Prisma.User_RoleAvgOrderByAggregateInput;
    _max?: Prisma.User_RoleMaxOrderByAggregateInput;
    _min?: Prisma.User_RoleMinOrderByAggregateInput;
    _sum?: Prisma.User_RoleSumOrderByAggregateInput;
};
export type User_RoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.User_RoleScalarWhereWithAggregatesInput | Prisma.User_RoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.User_RoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.User_RoleScalarWhereWithAggregatesInput | Prisma.User_RoleScalarWhereWithAggregatesInput[];
    user_id?: Prisma.IntWithAggregatesFilter<"User_Role"> | number;
    role_id?: Prisma.IntWithAggregatesFilter<"User_Role"> | number;
};
export type User_RoleCreateInput = {
    user: Prisma.UserCreateNestedOneWithoutUser_rolesInput;
    role: Prisma.RoleCreateNestedOneWithoutUser_rolesInput;
};
export type User_RoleUncheckedCreateInput = {
    user_id: number;
    role_id: number;
};
export type User_RoleUpdateInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutUser_rolesNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutUser_rolesNestedInput;
};
export type User_RoleUncheckedUpdateInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type User_RoleCreateManyInput = {
    user_id: number;
    role_id: number;
};
export type User_RoleUpdateManyMutationInput = {};
export type User_RoleUncheckedUpdateManyInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type User_RoleListRelationFilter = {
    every?: Prisma.User_RoleWhereInput;
    some?: Prisma.User_RoleWhereInput;
    none?: Prisma.User_RoleWhereInput;
};
export type User_RoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type User_RoleUser_idRole_idCompoundUniqueInput = {
    user_id: number;
    role_id: number;
};
export type User_RoleCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type User_RoleAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type User_RoleMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type User_RoleMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type User_RoleSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type User_RoleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutUserInput, Prisma.User_RoleUncheckedCreateWithoutUserInput> | Prisma.User_RoleCreateWithoutUserInput[] | Prisma.User_RoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutUserInput | Prisma.User_RoleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.User_RoleCreateManyUserInputEnvelope;
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
};
export type User_RoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutUserInput, Prisma.User_RoleUncheckedCreateWithoutUserInput> | Prisma.User_RoleCreateWithoutUserInput[] | Prisma.User_RoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutUserInput | Prisma.User_RoleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.User_RoleCreateManyUserInputEnvelope;
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
};
export type User_RoleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutUserInput, Prisma.User_RoleUncheckedCreateWithoutUserInput> | Prisma.User_RoleCreateWithoutUserInput[] | Prisma.User_RoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutUserInput | Prisma.User_RoleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.User_RoleUpsertWithWhereUniqueWithoutUserInput | Prisma.User_RoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.User_RoleCreateManyUserInputEnvelope;
    set?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    disconnect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    delete?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    update?: Prisma.User_RoleUpdateWithWhereUniqueWithoutUserInput | Prisma.User_RoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.User_RoleUpdateManyWithWhereWithoutUserInput | Prisma.User_RoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.User_RoleScalarWhereInput | Prisma.User_RoleScalarWhereInput[];
};
export type User_RoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutUserInput, Prisma.User_RoleUncheckedCreateWithoutUserInput> | Prisma.User_RoleCreateWithoutUserInput[] | Prisma.User_RoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutUserInput | Prisma.User_RoleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.User_RoleUpsertWithWhereUniqueWithoutUserInput | Prisma.User_RoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.User_RoleCreateManyUserInputEnvelope;
    set?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    disconnect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    delete?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    update?: Prisma.User_RoleUpdateWithWhereUniqueWithoutUserInput | Prisma.User_RoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.User_RoleUpdateManyWithWhereWithoutUserInput | Prisma.User_RoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.User_RoleScalarWhereInput | Prisma.User_RoleScalarWhereInput[];
};
export type User_RoleCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutRoleInput, Prisma.User_RoleUncheckedCreateWithoutRoleInput> | Prisma.User_RoleCreateWithoutRoleInput[] | Prisma.User_RoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutRoleInput | Prisma.User_RoleCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.User_RoleCreateManyRoleInputEnvelope;
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
};
export type User_RoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutRoleInput, Prisma.User_RoleUncheckedCreateWithoutRoleInput> | Prisma.User_RoleCreateWithoutRoleInput[] | Prisma.User_RoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutRoleInput | Prisma.User_RoleCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.User_RoleCreateManyRoleInputEnvelope;
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
};
export type User_RoleUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutRoleInput, Prisma.User_RoleUncheckedCreateWithoutRoleInput> | Prisma.User_RoleCreateWithoutRoleInput[] | Prisma.User_RoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutRoleInput | Prisma.User_RoleCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.User_RoleUpsertWithWhereUniqueWithoutRoleInput | Prisma.User_RoleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.User_RoleCreateManyRoleInputEnvelope;
    set?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    disconnect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    delete?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    update?: Prisma.User_RoleUpdateWithWhereUniqueWithoutRoleInput | Prisma.User_RoleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.User_RoleUpdateManyWithWhereWithoutRoleInput | Prisma.User_RoleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.User_RoleScalarWhereInput | Prisma.User_RoleScalarWhereInput[];
};
export type User_RoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.User_RoleCreateWithoutRoleInput, Prisma.User_RoleUncheckedCreateWithoutRoleInput> | Prisma.User_RoleCreateWithoutRoleInput[] | Prisma.User_RoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.User_RoleCreateOrConnectWithoutRoleInput | Prisma.User_RoleCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.User_RoleUpsertWithWhereUniqueWithoutRoleInput | Prisma.User_RoleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.User_RoleCreateManyRoleInputEnvelope;
    set?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    disconnect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    delete?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    connect?: Prisma.User_RoleWhereUniqueInput | Prisma.User_RoleWhereUniqueInput[];
    update?: Prisma.User_RoleUpdateWithWhereUniqueWithoutRoleInput | Prisma.User_RoleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.User_RoleUpdateManyWithWhereWithoutRoleInput | Prisma.User_RoleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.User_RoleScalarWhereInput | Prisma.User_RoleScalarWhereInput[];
};
export type User_RoleCreateWithoutUserInput = {
    role: Prisma.RoleCreateNestedOneWithoutUser_rolesInput;
};
export type User_RoleUncheckedCreateWithoutUserInput = {
    role_id: number;
};
export type User_RoleCreateOrConnectWithoutUserInput = {
    where: Prisma.User_RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_RoleCreateWithoutUserInput, Prisma.User_RoleUncheckedCreateWithoutUserInput>;
};
export type User_RoleCreateManyUserInputEnvelope = {
    data: Prisma.User_RoleCreateManyUserInput | Prisma.User_RoleCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type User_RoleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.User_RoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.User_RoleUpdateWithoutUserInput, Prisma.User_RoleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.User_RoleCreateWithoutUserInput, Prisma.User_RoleUncheckedCreateWithoutUserInput>;
};
export type User_RoleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.User_RoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.User_RoleUpdateWithoutUserInput, Prisma.User_RoleUncheckedUpdateWithoutUserInput>;
};
export type User_RoleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.User_RoleScalarWhereInput;
    data: Prisma.XOR<Prisma.User_RoleUpdateManyMutationInput, Prisma.User_RoleUncheckedUpdateManyWithoutUserInput>;
};
export type User_RoleScalarWhereInput = {
    AND?: Prisma.User_RoleScalarWhereInput | Prisma.User_RoleScalarWhereInput[];
    OR?: Prisma.User_RoleScalarWhereInput[];
    NOT?: Prisma.User_RoleScalarWhereInput | Prisma.User_RoleScalarWhereInput[];
    user_id?: Prisma.IntFilter<"User_Role"> | number;
    role_id?: Prisma.IntFilter<"User_Role"> | number;
};
export type User_RoleCreateWithoutRoleInput = {
    user: Prisma.UserCreateNestedOneWithoutUser_rolesInput;
};
export type User_RoleUncheckedCreateWithoutRoleInput = {
    user_id: number;
};
export type User_RoleCreateOrConnectWithoutRoleInput = {
    where: Prisma.User_RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_RoleCreateWithoutRoleInput, Prisma.User_RoleUncheckedCreateWithoutRoleInput>;
};
export type User_RoleCreateManyRoleInputEnvelope = {
    data: Prisma.User_RoleCreateManyRoleInput | Prisma.User_RoleCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type User_RoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.User_RoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.User_RoleUpdateWithoutRoleInput, Prisma.User_RoleUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.User_RoleCreateWithoutRoleInput, Prisma.User_RoleUncheckedCreateWithoutRoleInput>;
};
export type User_RoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.User_RoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.User_RoleUpdateWithoutRoleInput, Prisma.User_RoleUncheckedUpdateWithoutRoleInput>;
};
export type User_RoleUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.User_RoleScalarWhereInput;
    data: Prisma.XOR<Prisma.User_RoleUpdateManyMutationInput, Prisma.User_RoleUncheckedUpdateManyWithoutRoleInput>;
};
export type User_RoleCreateManyUserInput = {
    role_id: number;
};
export type User_RoleUpdateWithoutUserInput = {
    role?: Prisma.RoleUpdateOneRequiredWithoutUser_rolesNestedInput;
};
export type User_RoleUncheckedUpdateWithoutUserInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type User_RoleUncheckedUpdateManyWithoutUserInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type User_RoleCreateManyRoleInput = {
    user_id: number;
};
export type User_RoleUpdateWithoutRoleInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutUser_rolesNestedInput;
};
export type User_RoleUncheckedUpdateWithoutRoleInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type User_RoleUncheckedUpdateManyWithoutRoleInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type User_RoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    role_id?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_Role"]>;
export type User_RoleSelectScalar = {
    user_id?: boolean;
    role_id?: boolean;
};
export type User_RoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "role_id", ExtArgs["result"]["user_Role"]>;
export type User_RoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $User_RolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User_Role";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: number;
        role_id: number;
    }, ExtArgs["result"]["user_Role"]>;
    composites: {};
};
export type User_RoleGetPayload<S extends boolean | null | undefined | User_RoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$User_RolePayload, S>;
export type User_RoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<User_RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_RoleCountAggregateInputType | true;
};
export interface User_RoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User_Role'];
        meta: {
            name: 'User_Role';
        };
    };
    /**
     * Find zero or one User_Role that matches the filter.
     * @param {User_RoleFindUniqueArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_RoleFindUniqueArgs>(args: Prisma.SelectSubset<T, User_RoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User_Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_RoleFindUniqueOrThrowArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_RoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, User_RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleFindFirstArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_RoleFindFirstArgs>(args?: Prisma.SelectSubset<T, User_RoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleFindFirstOrThrowArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_RoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, User_RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more User_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Roles
     * const user_Roles = await prisma.user_Role.findMany()
     *
     * // Get first 10 User_Roles
     * const user_Roles = await prisma.user_Role.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const user_RoleWithUser_idOnly = await prisma.user_Role.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends User_RoleFindManyArgs>(args?: Prisma.SelectSubset<T, User_RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User_Role.
     * @param {User_RoleCreateArgs} args - Arguments to create a User_Role.
     * @example
     * // Create one User_Role
     * const User_Role = await prisma.user_Role.create({
     *   data: {
     *     // ... data to create a User_Role
     *   }
     * })
     *
     */
    create<T extends User_RoleCreateArgs>(args: Prisma.SelectSubset<T, User_RoleCreateArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many User_Roles.
     * @param {User_RoleCreateManyArgs} args - Arguments to create many User_Roles.
     * @example
     * // Create many User_Roles
     * const user_Role = await prisma.user_Role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends User_RoleCreateManyArgs>(args?: Prisma.SelectSubset<T, User_RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a User_Role.
     * @param {User_RoleDeleteArgs} args - Arguments to delete one User_Role.
     * @example
     * // Delete one User_Role
     * const User_Role = await prisma.user_Role.delete({
     *   where: {
     *     // ... filter to delete one User_Role
     *   }
     * })
     *
     */
    delete<T extends User_RoleDeleteArgs>(args: Prisma.SelectSubset<T, User_RoleDeleteArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User_Role.
     * @param {User_RoleUpdateArgs} args - Arguments to update one User_Role.
     * @example
     * // Update one User_Role
     * const user_Role = await prisma.user_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends User_RoleUpdateArgs>(args: Prisma.SelectSubset<T, User_RoleUpdateArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more User_Roles.
     * @param {User_RoleDeleteManyArgs} args - Arguments to filter User_Roles to delete.
     * @example
     * // Delete a few User_Roles
     * const { count } = await prisma.user_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends User_RoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, User_RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more User_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Roles
     * const user_Role = await prisma.user_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends User_RoleUpdateManyArgs>(args: Prisma.SelectSubset<T, User_RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one User_Role.
     * @param {User_RoleUpsertArgs} args - Arguments to update or create a User_Role.
     * @example
     * // Update or create a User_Role
     * const user_Role = await prisma.user_Role.upsert({
     *   create: {
     *     // ... data to create a User_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Role we want to update
     *   }
     * })
     */
    upsert<T extends User_RoleUpsertArgs>(args: Prisma.SelectSubset<T, User_RoleUpsertArgs<ExtArgs>>): Prisma.Prisma__User_RoleClient<runtime.Types.Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of User_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleCountArgs} args - Arguments to filter User_Roles to count.
     * @example
     * // Count the number of User_Roles
     * const count = await prisma.user_Role.count({
     *   where: {
     *     // ... the filter for the User_Roles we want to count
     *   }
     * })
    **/
    count<T extends User_RoleCountArgs>(args?: Prisma.Subset<T, User_RoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_RoleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_RoleAggregateArgs>(args: Prisma.Subset<T, User_RoleAggregateArgs>): Prisma.PrismaPromise<GetUser_RoleAggregateType<T>>;
    /**
     * Group by User_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends User_RoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: User_RoleGroupByArgs['orderBy'];
    } : {
        orderBy?: User_RoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, User_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User_Role model
     */
    readonly fields: User_RoleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User_Role.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__User_RoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the User_Role model
 */
export interface User_RoleFieldRefs {
    readonly user_id: Prisma.FieldRef<"User_Role", 'Int'>;
    readonly role_id: Prisma.FieldRef<"User_Role", 'Int'>;
}
/**
 * User_Role findUnique
 */
export type User_RoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * Filter, which User_Role to fetch.
     */
    where: Prisma.User_RoleWhereUniqueInput;
};
/**
 * User_Role findUniqueOrThrow
 */
export type User_RoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * Filter, which User_Role to fetch.
     */
    where: Prisma.User_RoleWhereUniqueInput;
};
/**
 * User_Role findFirst
 */
export type User_RoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * Filter, which User_Role to fetch.
     */
    where?: Prisma.User_RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: Prisma.User_RoleOrderByWithRelationInput | Prisma.User_RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for User_Roles.
     */
    cursor?: Prisma.User_RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Roles.
     */
    distinct?: Prisma.User_RoleScalarFieldEnum | Prisma.User_RoleScalarFieldEnum[];
};
/**
 * User_Role findFirstOrThrow
 */
export type User_RoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * Filter, which User_Role to fetch.
     */
    where?: Prisma.User_RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: Prisma.User_RoleOrderByWithRelationInput | Prisma.User_RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for User_Roles.
     */
    cursor?: Prisma.User_RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Roles.
     */
    distinct?: Prisma.User_RoleScalarFieldEnum | Prisma.User_RoleScalarFieldEnum[];
};
/**
 * User_Role findMany
 */
export type User_RoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * Filter, which User_Roles to fetch.
     */
    where?: Prisma.User_RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: Prisma.User_RoleOrderByWithRelationInput | Prisma.User_RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing User_Roles.
     */
    cursor?: Prisma.User_RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` User_Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of User_Roles.
     */
    distinct?: Prisma.User_RoleScalarFieldEnum | Prisma.User_RoleScalarFieldEnum[];
};
/**
 * User_Role create
 */
export type User_RoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * The data needed to create a User_Role.
     */
    data: Prisma.XOR<Prisma.User_RoleCreateInput, Prisma.User_RoleUncheckedCreateInput>;
};
/**
 * User_Role createMany
 */
export type User_RoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Roles.
     */
    data: Prisma.User_RoleCreateManyInput | Prisma.User_RoleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User_Role update
 */
export type User_RoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * The data needed to update a User_Role.
     */
    data: Prisma.XOR<Prisma.User_RoleUpdateInput, Prisma.User_RoleUncheckedUpdateInput>;
    /**
     * Choose, which User_Role to update.
     */
    where: Prisma.User_RoleWhereUniqueInput;
};
/**
 * User_Role updateMany
 */
export type User_RoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Roles.
     */
    data: Prisma.XOR<Prisma.User_RoleUpdateManyMutationInput, Prisma.User_RoleUncheckedUpdateManyInput>;
    /**
     * Filter which User_Roles to update
     */
    where?: Prisma.User_RoleWhereInput;
    /**
     * Limit how many User_Roles to update.
     */
    limit?: number;
};
/**
 * User_Role upsert
 */
export type User_RoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * The filter to search for the User_Role to update in case it exists.
     */
    where: Prisma.User_RoleWhereUniqueInput;
    /**
     * In case the User_Role found by the `where` argument doesn't exist, create a new User_Role with this data.
     */
    create: Prisma.XOR<Prisma.User_RoleCreateInput, Prisma.User_RoleUncheckedCreateInput>;
    /**
     * In case the User_Role was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.User_RoleUpdateInput, Prisma.User_RoleUncheckedUpdateInput>;
};
/**
 * User_Role delete
 */
export type User_RoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
    /**
     * Filter which User_Role to delete.
     */
    where: Prisma.User_RoleWhereUniqueInput;
};
/**
 * User_Role deleteMany
 */
export type User_RoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User_Roles to delete
     */
    where?: Prisma.User_RoleWhereInput;
    /**
     * Limit how many User_Roles to delete.
     */
    limit?: number;
};
/**
 * User_Role without action
 */
export type User_RoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: Prisma.User_RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User_Role
     */
    omit?: Prisma.User_RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.User_RoleInclude<ExtArgs> | null;
};
//# sourceMappingURL=User_Role.d.ts.map