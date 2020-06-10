export interface ProfileData {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ProfileModel {
    page: number;
    total: string;
    data: ProfileData;
}
