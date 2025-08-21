'use server';

import { getOccupationDetails } from '@/ai/flows/get-occupation-details';
import type { GetOccupationDetailsInput } from '@/ai/flows/types';


export async function getDetailsAction(input: GetOccupationDetailsInput) {
    try {
        const result = await getOccupationDetails(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to get occupation details. Please try again later.' };
    }
}
