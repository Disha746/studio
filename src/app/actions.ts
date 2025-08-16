'use server';

import { suggestOccupations } from '@/ai/flows/suggest-interior-occupations';
import { getOccupationDetails } from '@/ai/flows/get-occupation-details';
import type { SuggestOccupationsInput } from '@/ai/flows/types';
import type { GetOccupationDetailsInput } from '@/ai/flows/types';


export async function getSuggestionsAction(input: SuggestOccupationsInput) {
  try {
    const result = await suggestOccupations(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to get suggestions. Please try again later.' };
  }
}

export async function getDetailsAction(input: GetOccupationDetailsInput) {
    try {
        const result = await getOccupationDetails(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to get occupation details. Please try again later.' };
    }
}
