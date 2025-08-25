'use server';

import { getOccupationDetails } from '@/ai/flows/get-occupation-details';
import type { GetOccupationDetailsInput } from '@/ai/flows/types';
import { getSimulationConsequence } from '@/ai/flows/civil-servant-simulation';
import type { SimulationInput } from '@/ai/flows/civil-servant-simulation';

export async function getDetailsAction(input: GetOccupationDetailsInput) {
    try {
        const result = await getOccupationDetails(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to get occupation details. Please try again later.' };
    }
}

export async function getSimulationConsequenceAction(input: SimulationInput) {
    try {
        const result = await getSimulationConsequence(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to get simulation consequence. Please try again later.' };
    }
}
