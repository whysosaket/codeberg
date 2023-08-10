interface EventI {
    name: string;
    link: string;
    status: string;
    description: string;
    images: string[];
};

interface Status {
    type: 'live' | 'past' | 'upcoming';
};

export type { EventI, Status };