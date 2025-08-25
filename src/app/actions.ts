'use server';

import { getOccupationDetails } from '@/ai/flows/get-occupation-details';
import { getSimulationConsequence } from '@/ai/flows/civil-servant-simulation';
import { getProductManagerSimulationResult } from '@/ai/flows/product-manager-simulation';
import type { GetOccupationDetailsInput, SimulationInput, ProductManagerSimulationInput } from '@/ai/flows/types';

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

export async function getProductManagerSimulationAction(input: ProductManagerSimulationInput) {
    try {
        const result = await getProductManagerSimulationResult(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to get simulation result. Please try again later.' };
    }
}
