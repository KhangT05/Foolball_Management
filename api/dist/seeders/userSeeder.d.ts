import { RoleName } from "./roleSeeder.js";
import { PrismaClient } from "../generated/prisma/client.js";
export declare function seedUsers(db: PrismaClient, roleMap: Record<RoleName, number>): Promise<void>;
//# sourceMappingURL=userSeeder.d.ts.map