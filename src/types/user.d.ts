// types/user.d.ts
interface User {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    role: 'ORGANIZATION_OWNER' | 'SUB_AGENCY_RESPONSIBLE' | 'DRIVER' | 'ACCOUNTANT' | 'PLANNING_AGENT' | 'CLIENT_SUPPORT' | 'CUSTOM';
    organizationId?: string | null;
    subAgencyId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    // Potentially include relations like subAgency?: SubAgency; organization?: Organization;
  }
  
  // types/organization.d.ts
  interface Organization {
    id: string;
    name: string;
    address: string;
    legalRegistrationNumber: string;
    legalDocumentType?: string | null;
    legalDocumentUrl?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/subAgency.d.ts
  interface SubAgency {
    id: string;
    name: string;
    city: string;
    neighborhood?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    accessCode: string;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/bus.d.ts
  interface Bus {
    id: string;
    licensePlate: string;
    capacity: number;
    currentMileage?: number | null;
    lastMaintenance?: Date | null;
    nextMaintenance?: Date | null;
    organizationId: string;
    subAgencyId?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/client.d.ts
  interface Client {
    id: string;
    fullName: string;
    email?: string | null;
    phone: string;
    originAgency?: string | null;
    bookingChannel?: string | null;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/travel.d.ts
  interface Travel {
    id: string;
    origin: string;
    destination: string;
    departureTime: Date;
    arrivalTime: Date;
    status: string;
    price: number;
    estimatedCost?: number | null;
    actualCost?: number | null;
    busId?: string | null;
    driverId?: string | null;
    organizationId: string;
    subAgencyId?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/expense.d.ts
  interface Expense {
    id: string;
    description: string;
    amount: number;
    category: string;
    expenseDate: Date;
    organizationId: string;
    subAgencyId?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/document.d.ts
  interface Document {
    id: string;
    name: string;
    type: string;
    url: string;
    expirationDate?: Date | null;
    organizationId: string;
    subAgencyId?: string | null;
    relatedBusId?: string | null;
    relatedUserId?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/auditLog.d.ts
  interface AuditLog {
    id: string;
    action: string;
    entityType: string;
    entityId?: string | null;
    userId: string;
    userEmail: string;
    timestamp: Date;
    details?: Record<string, any> | null; // Use Json for details
    organizationId?: string | null;
  }
  
  // types/role.d.ts
  interface Role {
    id: string;
    name: string;
    description?: string | null;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/permission.d.ts
  interface Permission {
    id: string;
    name: string;
    description?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // types/common.d.ts (for shared types that don't fit specific models)
  // ...