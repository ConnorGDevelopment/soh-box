export namespace BoxDev {
    export interface User {
        type: string;
        id: string;
        name: string;
        login: string;
    }

    export interface Item {
        type: string;
        id: string;
        sequence_id: string;
        etag: string;
        name: string;
    }


    export interface Folder extends Item {
        type: string;
        id: string;
        sequence_id: any | null;
        etag: any | null;
        name: string;
        created_at: any | null;
        modified_at: any | null;
        description: string;
        size: number;
        path_collection: { total_count: number, entries: any[] }
        created_by: User;
        modified_by: User;
        trashed_at: any | null;
        purged_at: any | null;
        content_created_at: any | null;
        content_modified_at: any | null;
        owned_by: User;
        shared_link: any | null;
        folder_upload_email: any | null;
        parent: any | null;
        item_status: string;
        item_collection: {
            total_count: number;
            entries: Item[];
            offset: number;
            limit: number;
            order: any[]
        }
    }
}