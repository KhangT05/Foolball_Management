import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SeasonRule
 *
 */
export type SeasonRuleModel = runtime.Types.Result.DefaultSelection<Prisma.$SeasonRulePayload>;
export type AggregateSeasonRule = {
    _count: SeasonRuleCountAggregateOutputType | null;
    _avg: SeasonRuleAvgAggregateOutputType | null;
    _sum: SeasonRuleSumAggregateOutputType | null;
    _min: SeasonRuleMinAggregateOutputType | null;
    _max: SeasonRuleMaxAggregateOutputType | null;
};
export type SeasonRuleAvgAggregateOutputType = {
    id: number | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    deleted_by_id: number | null;
    season_id: number | null;
    points_per_win: number | null;
    points_per_draw: number | null;
    points_per_loss: number | null;
    yellow_cards_suspension: number | null;
    max_players_per_team: number | null;
    min_players_per_team: number | null;
    registration_fee: runtime.Decimal | null;
    forfeit_score: number | null;
    teams_advance_per_group: number | null;
    user_id: number | null;
};
export type SeasonRuleSumAggregateOutputType = {
    id: number | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    deleted_by_id: number | null;
    season_id: number | null;
    points_per_win: number | null;
    points_per_draw: number | null;
    points_per_loss: number | null;
    yellow_cards_suspension: number | null;
    max_players_per_team: number | null;
    min_players_per_team: number | null;
    registration_fee: runtime.Decimal | null;
    forfeit_score: number | null;
    teams_advance_per_group: number | null;
    user_id: number | null;
};
export type SeasonRuleMinAggregateOutputType = {
    id: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    deleted_at: Date | null;
    deleted_by_id: number | null;
    is_deleted: boolean | null;
    season_id: number | null;
    points_per_win: number | null;
    points_per_draw: number | null;
    points_per_loss: number | null;
    yellow_cards_suspension: number | null;
    max_players_per_team: number | null;
    min_players_per_team: number | null;
    registration_fee: runtime.Decimal | null;
    forfeit_score: number | null;
    teams_advance_per_group: number | null;
    user_id: number | null;
};
export type SeasonRuleMaxAggregateOutputType = {
    id: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    deleted_at: Date | null;
    deleted_by_id: number | null;
    is_deleted: boolean | null;
    season_id: number | null;
    points_per_win: number | null;
    points_per_draw: number | null;
    points_per_loss: number | null;
    yellow_cards_suspension: number | null;
    max_players_per_team: number | null;
    min_players_per_team: number | null;
    registration_fee: runtime.Decimal | null;
    forfeit_score: number | null;
    teams_advance_per_group: number | null;
    user_id: number | null;
};
export type SeasonRuleCountAggregateOutputType = {
    id: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    created_by_id: number;
    updated_by_id: number;
    deleted_at: number;
    deleted_by_id: number;
    is_deleted: number;
    season_id: number;
    points_per_win: number;
    points_per_draw: number;
    points_per_loss: number;
    yellow_cards_suspension: number;
    max_players_per_team: number;
    min_players_per_team: number;
    registration_fee: number;
    forfeit_score: number;
    teams_advance_per_group: number;
    tiebreaker_order: number;
    user_id: number;
    _all: number;
};
export type SeasonRuleAvgAggregateInputType = {
    id?: true;
    created_by_id?: true;
    updated_by_id?: true;
    deleted_by_id?: true;
    season_id?: true;
    points_per_win?: true;
    points_per_draw?: true;
    points_per_loss?: true;
    yellow_cards_suspension?: true;
    max_players_per_team?: true;
    min_players_per_team?: true;
    registration_fee?: true;
    forfeit_score?: true;
    teams_advance_per_group?: true;
    user_id?: true;
};
export type SeasonRuleSumAggregateInputType = {
    id?: true;
    created_by_id?: true;
    updated_by_id?: true;
    deleted_by_id?: true;
    season_id?: true;
    points_per_win?: true;
    points_per_draw?: true;
    points_per_loss?: true;
    yellow_cards_suspension?: true;
    max_players_per_team?: true;
    min_players_per_team?: true;
    registration_fee?: true;
    forfeit_score?: true;
    teams_advance_per_group?: true;
    user_id?: true;
};
export type SeasonRuleMinAggregateInputType = {
    id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    created_by_id?: true;
    updated_by_id?: true;
    deleted_at?: true;
    deleted_by_id?: true;
    is_deleted?: true;
    season_id?: true;
    points_per_win?: true;
    points_per_draw?: true;
    points_per_loss?: true;
    yellow_cards_suspension?: true;
    max_players_per_team?: true;
    min_players_per_team?: true;
    registration_fee?: true;
    forfeit_score?: true;
    teams_advance_per_group?: true;
    user_id?: true;
};
export type SeasonRuleMaxAggregateInputType = {
    id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    created_by_id?: true;
    updated_by_id?: true;
    deleted_at?: true;
    deleted_by_id?: true;
    is_deleted?: true;
    season_id?: true;
    points_per_win?: true;
    points_per_draw?: true;
    points_per_loss?: true;
    yellow_cards_suspension?: true;
    max_players_per_team?: true;
    min_players_per_team?: true;
    registration_fee?: true;
    forfeit_score?: true;
    teams_advance_per_group?: true;
    user_id?: true;
};
export type SeasonRuleCountAggregateInputType = {
    id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    created_by_id?: true;
    updated_by_id?: true;
    deleted_at?: true;
    deleted_by_id?: true;
    is_deleted?: true;
    season_id?: true;
    points_per_win?: true;
    points_per_draw?: true;
    points_per_loss?: true;
    yellow_cards_suspension?: true;
    max_players_per_team?: true;
    min_players_per_team?: true;
    registration_fee?: true;
    forfeit_score?: true;
    teams_advance_per_group?: true;
    tiebreaker_order?: true;
    user_id?: true;
    _all?: true;
};
export type SeasonRuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonRule to aggregate.
     */
    where?: Prisma.SeasonRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SeasonRules to fetch.
     */
    orderBy?: Prisma.SeasonRuleOrderByWithRelationInput | Prisma.SeasonRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SeasonRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SeasonRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SeasonRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SeasonRules
    **/
    _count?: true | SeasonRuleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SeasonRuleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SeasonRuleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SeasonRuleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SeasonRuleMaxAggregateInputType;
};
export type GetSeasonRuleAggregateType<T extends SeasonRuleAggregateArgs> = {
    [P in keyof T & keyof AggregateSeasonRule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeasonRule[P]> : Prisma.GetScalarType<T[P], AggregateSeasonRule[P]>;
};
export type SeasonRuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeasonRuleWhereInput;
    orderBy?: Prisma.SeasonRuleOrderByWithAggregationInput | Prisma.SeasonRuleOrderByWithAggregationInput[];
    by: Prisma.SeasonRuleScalarFieldEnum[] | Prisma.SeasonRuleScalarFieldEnum;
    having?: Prisma.SeasonRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeasonRuleCountAggregateInputType | true;
    _avg?: SeasonRuleAvgAggregateInputType;
    _sum?: SeasonRuleSumAggregateInputType;
    _min?: SeasonRuleMinAggregateInputType;
    _max?: SeasonRuleMaxAggregateInputType;
};
export type SeasonRuleGroupByOutputType = {
    id: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    deleted_at: Date | null;
    deleted_by_id: number | null;
    is_deleted: boolean;
    season_id: number;
    points_per_win: number;
    points_per_draw: number;
    points_per_loss: number;
    yellow_cards_suspension: number;
    max_players_per_team: number;
    min_players_per_team: number;
    registration_fee: runtime.Decimal;
    forfeit_score: number;
    teams_advance_per_group: number;
    tiebreaker_order: runtime.JsonValue;
    user_id: number | null;
    _count: SeasonRuleCountAggregateOutputType | null;
    _avg: SeasonRuleAvgAggregateOutputType | null;
    _sum: SeasonRuleSumAggregateOutputType | null;
    _min: SeasonRuleMinAggregateOutputType | null;
    _max: SeasonRuleMaxAggregateOutputType | null;
};
export type GetSeasonRuleGroupByPayload<T extends SeasonRuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeasonRuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeasonRuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeasonRuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeasonRuleGroupByOutputType[P]>;
}>>;
export type SeasonRuleWhereInput = {
    AND?: Prisma.SeasonRuleWhereInput | Prisma.SeasonRuleWhereInput[];
    OR?: Prisma.SeasonRuleWhereInput[];
    NOT?: Prisma.SeasonRuleWhereInput | Prisma.SeasonRuleWhereInput[];
    id?: Prisma.IntFilter<"SeasonRule"> | number;
    is_active?: Prisma.BoolFilter<"SeasonRule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SeasonRule"> | Date | string;
    updated_at?: Prisma.DateTimeNullableFilter<"SeasonRule"> | Date | string | null;
    created_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    updated_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"SeasonRule"> | Date | string | null;
    deleted_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    is_deleted?: Prisma.BoolFilter<"SeasonRule"> | boolean;
    season_id?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_win?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_draw?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_loss?: Prisma.IntFilter<"SeasonRule"> | number;
    yellow_cards_suspension?: Prisma.IntFilter<"SeasonRule"> | number;
    max_players_per_team?: Prisma.IntFilter<"SeasonRule"> | number;
    min_players_per_team?: Prisma.IntFilter<"SeasonRule"> | number;
    registration_fee?: Prisma.DecimalFilter<"SeasonRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFilter<"SeasonRule"> | number;
    teams_advance_per_group?: Prisma.IntFilter<"SeasonRule"> | number;
    tiebreaker_order?: Prisma.JsonFilter<"SeasonRule">;
    user_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    season?: Prisma.XOR<Prisma.SeasonScalarRelationFilter, Prisma.SeasonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type SeasonRuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    tiebreaker_order?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    season?: Prisma.SeasonOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SeasonRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    season_id?: number;
    AND?: Prisma.SeasonRuleWhereInput | Prisma.SeasonRuleWhereInput[];
    OR?: Prisma.SeasonRuleWhereInput[];
    NOT?: Prisma.SeasonRuleWhereInput | Prisma.SeasonRuleWhereInput[];
    is_active?: Prisma.BoolFilter<"SeasonRule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SeasonRule"> | Date | string;
    updated_at?: Prisma.DateTimeNullableFilter<"SeasonRule"> | Date | string | null;
    created_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    updated_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"SeasonRule"> | Date | string | null;
    deleted_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    is_deleted?: Prisma.BoolFilter<"SeasonRule"> | boolean;
    points_per_win?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_draw?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_loss?: Prisma.IntFilter<"SeasonRule"> | number;
    yellow_cards_suspension?: Prisma.IntFilter<"SeasonRule"> | number;
    max_players_per_team?: Prisma.IntFilter<"SeasonRule"> | number;
    min_players_per_team?: Prisma.IntFilter<"SeasonRule"> | number;
    registration_fee?: Prisma.DecimalFilter<"SeasonRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFilter<"SeasonRule"> | number;
    teams_advance_per_group?: Prisma.IntFilter<"SeasonRule"> | number;
    tiebreaker_order?: Prisma.JsonFilter<"SeasonRule">;
    user_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    season?: Prisma.XOR<Prisma.SeasonScalarRelationFilter, Prisma.SeasonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "season_id">;
export type SeasonRuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    tiebreaker_order?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SeasonRuleCountOrderByAggregateInput;
    _avg?: Prisma.SeasonRuleAvgOrderByAggregateInput;
    _max?: Prisma.SeasonRuleMaxOrderByAggregateInput;
    _min?: Prisma.SeasonRuleMinOrderByAggregateInput;
    _sum?: Prisma.SeasonRuleSumOrderByAggregateInput;
};
export type SeasonRuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.SeasonRuleScalarWhereWithAggregatesInput | Prisma.SeasonRuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.SeasonRuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SeasonRuleScalarWhereWithAggregatesInput | Prisma.SeasonRuleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"SeasonRule"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"SeasonRule"> | Date | string;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"SeasonRule"> | Date | string | null;
    created_by_id?: Prisma.IntNullableWithAggregatesFilter<"SeasonRule"> | number | null;
    updated_by_id?: Prisma.IntNullableWithAggregatesFilter<"SeasonRule"> | number | null;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"SeasonRule"> | Date | string | null;
    deleted_by_id?: Prisma.IntNullableWithAggregatesFilter<"SeasonRule"> | number | null;
    is_deleted?: Prisma.BoolWithAggregatesFilter<"SeasonRule"> | boolean;
    season_id?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    points_per_win?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    points_per_draw?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    points_per_loss?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    yellow_cards_suspension?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    max_players_per_team?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    min_players_per_team?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    registration_fee?: Prisma.DecimalWithAggregatesFilter<"SeasonRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    teams_advance_per_group?: Prisma.IntWithAggregatesFilter<"SeasonRule"> | number;
    tiebreaker_order?: Prisma.JsonWithAggregatesFilter<"SeasonRule">;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"SeasonRule"> | number | null;
};
export type SeasonRuleCreateInput = {
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    season: Prisma.SeasonCreateNestedOneWithoutSeason_ruleInput;
    user?: Prisma.UserCreateNestedOneWithoutSeasonRulesInput;
};
export type SeasonRuleUncheckedCreateInput = {
    id?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    season_id: number;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user_id?: number | null;
};
export type SeasonRuleUpdateInput = {
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    season?: Prisma.SeasonUpdateOneRequiredWithoutSeason_ruleNestedInput;
    user?: Prisma.UserUpdateOneWithoutSeasonRulesNestedInput;
};
export type SeasonRuleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    season_id?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SeasonRuleCreateManyInput = {
    id?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    season_id: number;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user_id?: number | null;
};
export type SeasonRuleUpdateManyMutationInput = {
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type SeasonRuleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    season_id?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SeasonRuleListRelationFilter = {
    every?: Prisma.SeasonRuleWhereInput;
    some?: Prisma.SeasonRuleWhereInput;
    none?: Prisma.SeasonRuleWhereInput;
};
export type SeasonRuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SeasonRuleNullableScalarRelationFilter = {
    is?: Prisma.SeasonRuleWhereInput | null;
    isNot?: Prisma.SeasonRuleWhereInput | null;
};
export type SeasonRuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by_id?: Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    tiebreaker_order?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type SeasonRuleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_by_id?: Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type SeasonRuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by_id?: Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type SeasonRuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by_id?: Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrder;
    is_deleted?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type SeasonRuleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_by_id?: Prisma.SortOrder;
    updated_by_id?: Prisma.SortOrder;
    deleted_by_id?: Prisma.SortOrder;
    season_id?: Prisma.SortOrder;
    points_per_win?: Prisma.SortOrder;
    points_per_draw?: Prisma.SortOrder;
    points_per_loss?: Prisma.SortOrder;
    yellow_cards_suspension?: Prisma.SortOrder;
    max_players_per_team?: Prisma.SortOrder;
    min_players_per_team?: Prisma.SortOrder;
    registration_fee?: Prisma.SortOrder;
    forfeit_score?: Prisma.SortOrder;
    teams_advance_per_group?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type SeasonRuleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutUserInput, Prisma.SeasonRuleUncheckedCreateWithoutUserInput> | Prisma.SeasonRuleCreateWithoutUserInput[] | Prisma.SeasonRuleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutUserInput | Prisma.SeasonRuleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SeasonRuleCreateManyUserInputEnvelope;
    connect?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
};
export type SeasonRuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutUserInput, Prisma.SeasonRuleUncheckedCreateWithoutUserInput> | Prisma.SeasonRuleCreateWithoutUserInput[] | Prisma.SeasonRuleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutUserInput | Prisma.SeasonRuleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SeasonRuleCreateManyUserInputEnvelope;
    connect?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
};
export type SeasonRuleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutUserInput, Prisma.SeasonRuleUncheckedCreateWithoutUserInput> | Prisma.SeasonRuleCreateWithoutUserInput[] | Prisma.SeasonRuleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutUserInput | Prisma.SeasonRuleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SeasonRuleUpsertWithWhereUniqueWithoutUserInput | Prisma.SeasonRuleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SeasonRuleCreateManyUserInputEnvelope;
    set?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    disconnect?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    delete?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    connect?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    update?: Prisma.SeasonRuleUpdateWithWhereUniqueWithoutUserInput | Prisma.SeasonRuleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SeasonRuleUpdateManyWithWhereWithoutUserInput | Prisma.SeasonRuleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SeasonRuleScalarWhereInput | Prisma.SeasonRuleScalarWhereInput[];
};
export type SeasonRuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutUserInput, Prisma.SeasonRuleUncheckedCreateWithoutUserInput> | Prisma.SeasonRuleCreateWithoutUserInput[] | Prisma.SeasonRuleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutUserInput | Prisma.SeasonRuleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SeasonRuleUpsertWithWhereUniqueWithoutUserInput | Prisma.SeasonRuleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SeasonRuleCreateManyUserInputEnvelope;
    set?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    disconnect?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    delete?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    connect?: Prisma.SeasonRuleWhereUniqueInput | Prisma.SeasonRuleWhereUniqueInput[];
    update?: Prisma.SeasonRuleUpdateWithWhereUniqueWithoutUserInput | Prisma.SeasonRuleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SeasonRuleUpdateManyWithWhereWithoutUserInput | Prisma.SeasonRuleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SeasonRuleScalarWhereInput | Prisma.SeasonRuleScalarWhereInput[];
};
export type SeasonRuleCreateNestedOneWithoutSeasonInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutSeasonInput, Prisma.SeasonRuleUncheckedCreateWithoutSeasonInput>;
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutSeasonInput;
    connect?: Prisma.SeasonRuleWhereUniqueInput;
};
export type SeasonRuleUncheckedCreateNestedOneWithoutSeasonInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutSeasonInput, Prisma.SeasonRuleUncheckedCreateWithoutSeasonInput>;
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutSeasonInput;
    connect?: Prisma.SeasonRuleWhereUniqueInput;
};
export type SeasonRuleUpdateOneWithoutSeasonNestedInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutSeasonInput, Prisma.SeasonRuleUncheckedCreateWithoutSeasonInput>;
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutSeasonInput;
    upsert?: Prisma.SeasonRuleUpsertWithoutSeasonInput;
    disconnect?: Prisma.SeasonRuleWhereInput | boolean;
    delete?: Prisma.SeasonRuleWhereInput | boolean;
    connect?: Prisma.SeasonRuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SeasonRuleUpdateToOneWithWhereWithoutSeasonInput, Prisma.SeasonRuleUpdateWithoutSeasonInput>, Prisma.SeasonRuleUncheckedUpdateWithoutSeasonInput>;
};
export type SeasonRuleUncheckedUpdateOneWithoutSeasonNestedInput = {
    create?: Prisma.XOR<Prisma.SeasonRuleCreateWithoutSeasonInput, Prisma.SeasonRuleUncheckedCreateWithoutSeasonInput>;
    connectOrCreate?: Prisma.SeasonRuleCreateOrConnectWithoutSeasonInput;
    upsert?: Prisma.SeasonRuleUpsertWithoutSeasonInput;
    disconnect?: Prisma.SeasonRuleWhereInput | boolean;
    delete?: Prisma.SeasonRuleWhereInput | boolean;
    connect?: Prisma.SeasonRuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SeasonRuleUpdateToOneWithWhereWithoutSeasonInput, Prisma.SeasonRuleUpdateWithoutSeasonInput>, Prisma.SeasonRuleUncheckedUpdateWithoutSeasonInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type SeasonRuleCreateWithoutUserInput = {
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    season: Prisma.SeasonCreateNestedOneWithoutSeason_ruleInput;
};
export type SeasonRuleUncheckedCreateWithoutUserInput = {
    id?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    season_id: number;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type SeasonRuleCreateOrConnectWithoutUserInput = {
    where: Prisma.SeasonRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeasonRuleCreateWithoutUserInput, Prisma.SeasonRuleUncheckedCreateWithoutUserInput>;
};
export type SeasonRuleCreateManyUserInputEnvelope = {
    data: Prisma.SeasonRuleCreateManyUserInput | Prisma.SeasonRuleCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SeasonRuleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SeasonRuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeasonRuleUpdateWithoutUserInput, Prisma.SeasonRuleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SeasonRuleCreateWithoutUserInput, Prisma.SeasonRuleUncheckedCreateWithoutUserInput>;
};
export type SeasonRuleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SeasonRuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeasonRuleUpdateWithoutUserInput, Prisma.SeasonRuleUncheckedUpdateWithoutUserInput>;
};
export type SeasonRuleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SeasonRuleScalarWhereInput;
    data: Prisma.XOR<Prisma.SeasonRuleUpdateManyMutationInput, Prisma.SeasonRuleUncheckedUpdateManyWithoutUserInput>;
};
export type SeasonRuleScalarWhereInput = {
    AND?: Prisma.SeasonRuleScalarWhereInput | Prisma.SeasonRuleScalarWhereInput[];
    OR?: Prisma.SeasonRuleScalarWhereInput[];
    NOT?: Prisma.SeasonRuleScalarWhereInput | Prisma.SeasonRuleScalarWhereInput[];
    id?: Prisma.IntFilter<"SeasonRule"> | number;
    is_active?: Prisma.BoolFilter<"SeasonRule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SeasonRule"> | Date | string;
    updated_at?: Prisma.DateTimeNullableFilter<"SeasonRule"> | Date | string | null;
    created_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    updated_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"SeasonRule"> | Date | string | null;
    deleted_by_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
    is_deleted?: Prisma.BoolFilter<"SeasonRule"> | boolean;
    season_id?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_win?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_draw?: Prisma.IntFilter<"SeasonRule"> | number;
    points_per_loss?: Prisma.IntFilter<"SeasonRule"> | number;
    yellow_cards_suspension?: Prisma.IntFilter<"SeasonRule"> | number;
    max_players_per_team?: Prisma.IntFilter<"SeasonRule"> | number;
    min_players_per_team?: Prisma.IntFilter<"SeasonRule"> | number;
    registration_fee?: Prisma.DecimalFilter<"SeasonRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFilter<"SeasonRule"> | number;
    teams_advance_per_group?: Prisma.IntFilter<"SeasonRule"> | number;
    tiebreaker_order?: Prisma.JsonFilter<"SeasonRule">;
    user_id?: Prisma.IntNullableFilter<"SeasonRule"> | number | null;
};
export type SeasonRuleCreateWithoutSeasonInput = {
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserCreateNestedOneWithoutSeasonRulesInput;
};
export type SeasonRuleUncheckedCreateWithoutSeasonInput = {
    id?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user_id?: number | null;
};
export type SeasonRuleCreateOrConnectWithoutSeasonInput = {
    where: Prisma.SeasonRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeasonRuleCreateWithoutSeasonInput, Prisma.SeasonRuleUncheckedCreateWithoutSeasonInput>;
};
export type SeasonRuleUpsertWithoutSeasonInput = {
    update: Prisma.XOR<Prisma.SeasonRuleUpdateWithoutSeasonInput, Prisma.SeasonRuleUncheckedUpdateWithoutSeasonInput>;
    create: Prisma.XOR<Prisma.SeasonRuleCreateWithoutSeasonInput, Prisma.SeasonRuleUncheckedCreateWithoutSeasonInput>;
    where?: Prisma.SeasonRuleWhereInput;
};
export type SeasonRuleUpdateToOneWithWhereWithoutSeasonInput = {
    where?: Prisma.SeasonRuleWhereInput;
    data: Prisma.XOR<Prisma.SeasonRuleUpdateWithoutSeasonInput, Prisma.SeasonRuleUncheckedUpdateWithoutSeasonInput>;
};
export type SeasonRuleUpdateWithoutSeasonInput = {
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneWithoutSeasonRulesNestedInput;
};
export type SeasonRuleUncheckedUpdateWithoutSeasonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type SeasonRuleCreateManyUserInput = {
    id?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string | null;
    created_by_id?: number | null;
    updated_by_id?: number | null;
    deleted_at?: Date | string | null;
    deleted_by_id?: number | null;
    is_deleted?: boolean;
    season_id: number;
    points_per_win?: number;
    points_per_draw?: number;
    points_per_loss?: number;
    yellow_cards_suspension?: number;
    max_players_per_team?: number;
    min_players_per_team?: number;
    registration_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: number;
    teams_advance_per_group?: number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type SeasonRuleUpdateWithoutUserInput = {
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    season?: Prisma.SeasonUpdateOneRequiredWithoutSeason_ruleNestedInput;
};
export type SeasonRuleUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    season_id?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type SeasonRuleUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updated_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_by_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    season_id?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_win?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_draw?: Prisma.IntFieldUpdateOperationsInput | number;
    points_per_loss?: Prisma.IntFieldUpdateOperationsInput | number;
    yellow_cards_suspension?: Prisma.IntFieldUpdateOperationsInput | number;
    max_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    min_players_per_team?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    forfeit_score?: Prisma.IntFieldUpdateOperationsInput | number;
    teams_advance_per_group?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreaker_order?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type SeasonRuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by_id?: boolean;
    updated_by_id?: boolean;
    deleted_at?: boolean;
    deleted_by_id?: boolean;
    is_deleted?: boolean;
    season_id?: boolean;
    points_per_win?: boolean;
    points_per_draw?: boolean;
    points_per_loss?: boolean;
    yellow_cards_suspension?: boolean;
    max_players_per_team?: boolean;
    min_players_per_team?: boolean;
    registration_fee?: boolean;
    forfeit_score?: boolean;
    teams_advance_per_group?: boolean;
    tiebreaker_order?: boolean;
    user_id?: boolean;
    season?: boolean | Prisma.SeasonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.SeasonRule$userArgs<ExtArgs>;
}, ExtArgs["result"]["seasonRule"]>;
export type SeasonRuleSelectScalar = {
    id?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by_id?: boolean;
    updated_by_id?: boolean;
    deleted_at?: boolean;
    deleted_by_id?: boolean;
    is_deleted?: boolean;
    season_id?: boolean;
    points_per_win?: boolean;
    points_per_draw?: boolean;
    points_per_loss?: boolean;
    yellow_cards_suspension?: boolean;
    max_players_per_team?: boolean;
    min_players_per_team?: boolean;
    registration_fee?: boolean;
    forfeit_score?: boolean;
    teams_advance_per_group?: boolean;
    tiebreaker_order?: boolean;
    user_id?: boolean;
};
export type SeasonRuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "is_active" | "created_at" | "updated_at" | "created_by_id" | "updated_by_id" | "deleted_at" | "deleted_by_id" | "is_deleted" | "season_id" | "points_per_win" | "points_per_draw" | "points_per_loss" | "yellow_cards_suspension" | "max_players_per_team" | "min_players_per_team" | "registration_fee" | "forfeit_score" | "teams_advance_per_group" | "tiebreaker_order" | "user_id", ExtArgs["result"]["seasonRule"]>;
export type SeasonRuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    season?: boolean | Prisma.SeasonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.SeasonRule$userArgs<ExtArgs>;
};
export type $SeasonRulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SeasonRule";
    objects: {
        season: Prisma.$SeasonPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date | null;
        created_by_id: number | null;
        updated_by_id: number | null;
        deleted_at: Date | null;
        deleted_by_id: number | null;
        is_deleted: boolean;
        season_id: number;
        points_per_win: number;
        points_per_draw: number;
        points_per_loss: number;
        yellow_cards_suspension: number;
        max_players_per_team: number;
        min_players_per_team: number;
        registration_fee: runtime.Decimal;
        forfeit_score: number;
        teams_advance_per_group: number;
        tiebreaker_order: runtime.JsonValue;
        user_id: number | null;
    }, ExtArgs["result"]["seasonRule"]>;
    composites: {};
};
export type SeasonRuleGetPayload<S extends boolean | null | undefined | SeasonRuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload, S>;
export type SeasonRuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SeasonRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeasonRuleCountAggregateInputType | true;
};
export interface SeasonRuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SeasonRule'];
        meta: {
            name: 'SeasonRule';
        };
    };
    /**
     * Find zero or one SeasonRule that matches the filter.
     * @param {SeasonRuleFindUniqueArgs} args - Arguments to find a SeasonRule
     * @example
     * // Get one SeasonRule
     * const seasonRule = await prisma.seasonRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonRuleFindUniqueArgs>(args: Prisma.SelectSubset<T, SeasonRuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SeasonRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonRuleFindUniqueOrThrowArgs} args - Arguments to find a SeasonRule
     * @example
     * // Get one SeasonRule
     * const seasonRule = await prisma.seasonRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonRuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SeasonRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SeasonRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleFindFirstArgs} args - Arguments to find a SeasonRule
     * @example
     * // Get one SeasonRule
     * const seasonRule = await prisma.seasonRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonRuleFindFirstArgs>(args?: Prisma.SelectSubset<T, SeasonRuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SeasonRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleFindFirstOrThrowArgs} args - Arguments to find a SeasonRule
     * @example
     * // Get one SeasonRule
     * const seasonRule = await prisma.seasonRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonRuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SeasonRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SeasonRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeasonRules
     * const seasonRules = await prisma.seasonRule.findMany()
     *
     * // Get first 10 SeasonRules
     * const seasonRules = await prisma.seasonRule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const seasonRuleWithIdOnly = await prisma.seasonRule.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SeasonRuleFindManyArgs>(args?: Prisma.SelectSubset<T, SeasonRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SeasonRule.
     * @param {SeasonRuleCreateArgs} args - Arguments to create a SeasonRule.
     * @example
     * // Create one SeasonRule
     * const SeasonRule = await prisma.seasonRule.create({
     *   data: {
     *     // ... data to create a SeasonRule
     *   }
     * })
     *
     */
    create<T extends SeasonRuleCreateArgs>(args: Prisma.SelectSubset<T, SeasonRuleCreateArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SeasonRules.
     * @param {SeasonRuleCreateManyArgs} args - Arguments to create many SeasonRules.
     * @example
     * // Create many SeasonRules
     * const seasonRule = await prisma.seasonRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SeasonRuleCreateManyArgs>(args?: Prisma.SelectSubset<T, SeasonRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a SeasonRule.
     * @param {SeasonRuleDeleteArgs} args - Arguments to delete one SeasonRule.
     * @example
     * // Delete one SeasonRule
     * const SeasonRule = await prisma.seasonRule.delete({
     *   where: {
     *     // ... filter to delete one SeasonRule
     *   }
     * })
     *
     */
    delete<T extends SeasonRuleDeleteArgs>(args: Prisma.SelectSubset<T, SeasonRuleDeleteArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SeasonRule.
     * @param {SeasonRuleUpdateArgs} args - Arguments to update one SeasonRule.
     * @example
     * // Update one SeasonRule
     * const seasonRule = await prisma.seasonRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SeasonRuleUpdateArgs>(args: Prisma.SelectSubset<T, SeasonRuleUpdateArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SeasonRules.
     * @param {SeasonRuleDeleteManyArgs} args - Arguments to filter SeasonRules to delete.
     * @example
     * // Delete a few SeasonRules
     * const { count } = await prisma.seasonRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SeasonRuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, SeasonRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SeasonRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeasonRules
     * const seasonRule = await prisma.seasonRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SeasonRuleUpdateManyArgs>(args: Prisma.SelectSubset<T, SeasonRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one SeasonRule.
     * @param {SeasonRuleUpsertArgs} args - Arguments to update or create a SeasonRule.
     * @example
     * // Update or create a SeasonRule
     * const seasonRule = await prisma.seasonRule.upsert({
     *   create: {
     *     // ... data to create a SeasonRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeasonRule we want to update
     *   }
     * })
     */
    upsert<T extends SeasonRuleUpsertArgs>(args: Prisma.SelectSubset<T, SeasonRuleUpsertArgs<ExtArgs>>): Prisma.Prisma__SeasonRuleClient<runtime.Types.Result.GetResult<Prisma.$SeasonRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SeasonRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleCountArgs} args - Arguments to filter SeasonRules to count.
     * @example
     * // Count the number of SeasonRules
     * const count = await prisma.seasonRule.count({
     *   where: {
     *     // ... the filter for the SeasonRules we want to count
     *   }
     * })
    **/
    count<T extends SeasonRuleCountArgs>(args?: Prisma.Subset<T, SeasonRuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeasonRuleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SeasonRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonRuleAggregateArgs>(args: Prisma.Subset<T, SeasonRuleAggregateArgs>): Prisma.PrismaPromise<GetSeasonRuleAggregateType<T>>;
    /**
     * Group by SeasonRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonRuleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SeasonRuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SeasonRuleGroupByArgs['orderBy'];
    } : {
        orderBy?: SeasonRuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SeasonRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SeasonRule model
     */
    readonly fields: SeasonRuleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SeasonRule.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SeasonRuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    season<T extends Prisma.SeasonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SeasonDefaultArgs<ExtArgs>>): Prisma.Prisma__SeasonClient<runtime.Types.Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.SeasonRule$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SeasonRule$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SeasonRule model
 */
export interface SeasonRuleFieldRefs {
    readonly id: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly is_active: Prisma.FieldRef<"SeasonRule", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"SeasonRule", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"SeasonRule", 'DateTime'>;
    readonly created_by_id: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly updated_by_id: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly deleted_at: Prisma.FieldRef<"SeasonRule", 'DateTime'>;
    readonly deleted_by_id: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly is_deleted: Prisma.FieldRef<"SeasonRule", 'Boolean'>;
    readonly season_id: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly points_per_win: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly points_per_draw: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly points_per_loss: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly yellow_cards_suspension: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly max_players_per_team: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly min_players_per_team: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly registration_fee: Prisma.FieldRef<"SeasonRule", 'Decimal'>;
    readonly forfeit_score: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly teams_advance_per_group: Prisma.FieldRef<"SeasonRule", 'Int'>;
    readonly tiebreaker_order: Prisma.FieldRef<"SeasonRule", 'Json'>;
    readonly user_id: Prisma.FieldRef<"SeasonRule", 'Int'>;
}
/**
 * SeasonRule findUnique
 */
export type SeasonRuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * Filter, which SeasonRule to fetch.
     */
    where: Prisma.SeasonRuleWhereUniqueInput;
};
/**
 * SeasonRule findUniqueOrThrow
 */
export type SeasonRuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * Filter, which SeasonRule to fetch.
     */
    where: Prisma.SeasonRuleWhereUniqueInput;
};
/**
 * SeasonRule findFirst
 */
export type SeasonRuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * Filter, which SeasonRule to fetch.
     */
    where?: Prisma.SeasonRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SeasonRules to fetch.
     */
    orderBy?: Prisma.SeasonRuleOrderByWithRelationInput | Prisma.SeasonRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SeasonRules.
     */
    cursor?: Prisma.SeasonRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SeasonRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SeasonRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SeasonRules.
     */
    distinct?: Prisma.SeasonRuleScalarFieldEnum | Prisma.SeasonRuleScalarFieldEnum[];
};
/**
 * SeasonRule findFirstOrThrow
 */
export type SeasonRuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * Filter, which SeasonRule to fetch.
     */
    where?: Prisma.SeasonRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SeasonRules to fetch.
     */
    orderBy?: Prisma.SeasonRuleOrderByWithRelationInput | Prisma.SeasonRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SeasonRules.
     */
    cursor?: Prisma.SeasonRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SeasonRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SeasonRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SeasonRules.
     */
    distinct?: Prisma.SeasonRuleScalarFieldEnum | Prisma.SeasonRuleScalarFieldEnum[];
};
/**
 * SeasonRule findMany
 */
export type SeasonRuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * Filter, which SeasonRules to fetch.
     */
    where?: Prisma.SeasonRuleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SeasonRules to fetch.
     */
    orderBy?: Prisma.SeasonRuleOrderByWithRelationInput | Prisma.SeasonRuleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SeasonRules.
     */
    cursor?: Prisma.SeasonRuleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SeasonRules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SeasonRules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SeasonRules.
     */
    distinct?: Prisma.SeasonRuleScalarFieldEnum | Prisma.SeasonRuleScalarFieldEnum[];
};
/**
 * SeasonRule create
 */
export type SeasonRuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * The data needed to create a SeasonRule.
     */
    data: Prisma.XOR<Prisma.SeasonRuleCreateInput, Prisma.SeasonRuleUncheckedCreateInput>;
};
/**
 * SeasonRule createMany
 */
export type SeasonRuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeasonRules.
     */
    data: Prisma.SeasonRuleCreateManyInput | Prisma.SeasonRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SeasonRule update
 */
export type SeasonRuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * The data needed to update a SeasonRule.
     */
    data: Prisma.XOR<Prisma.SeasonRuleUpdateInput, Prisma.SeasonRuleUncheckedUpdateInput>;
    /**
     * Choose, which SeasonRule to update.
     */
    where: Prisma.SeasonRuleWhereUniqueInput;
};
/**
 * SeasonRule updateMany
 */
export type SeasonRuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SeasonRules.
     */
    data: Prisma.XOR<Prisma.SeasonRuleUpdateManyMutationInput, Prisma.SeasonRuleUncheckedUpdateManyInput>;
    /**
     * Filter which SeasonRules to update
     */
    where?: Prisma.SeasonRuleWhereInput;
    /**
     * Limit how many SeasonRules to update.
     */
    limit?: number;
};
/**
 * SeasonRule upsert
 */
export type SeasonRuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * The filter to search for the SeasonRule to update in case it exists.
     */
    where: Prisma.SeasonRuleWhereUniqueInput;
    /**
     * In case the SeasonRule found by the `where` argument doesn't exist, create a new SeasonRule with this data.
     */
    create: Prisma.XOR<Prisma.SeasonRuleCreateInput, Prisma.SeasonRuleUncheckedCreateInput>;
    /**
     * In case the SeasonRule was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SeasonRuleUpdateInput, Prisma.SeasonRuleUncheckedUpdateInput>;
};
/**
 * SeasonRule delete
 */
export type SeasonRuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
    /**
     * Filter which SeasonRule to delete.
     */
    where: Prisma.SeasonRuleWhereUniqueInput;
};
/**
 * SeasonRule deleteMany
 */
export type SeasonRuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonRules to delete
     */
    where?: Prisma.SeasonRuleWhereInput;
    /**
     * Limit how many SeasonRules to delete.
     */
    limit?: number;
};
/**
 * SeasonRule.user
 */
export type SeasonRule$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * SeasonRule without action
 */
export type SeasonRuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonRule
     */
    select?: Prisma.SeasonRuleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SeasonRule
     */
    omit?: Prisma.SeasonRuleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SeasonRuleInclude<ExtArgs> | null;
};
//# sourceMappingURL=SeasonRule.d.ts.map