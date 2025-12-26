
import { useState, useCallback } from 'react';
import { getCraftRecommendation } from '@/core/utils/gemini';

export const useGeminiRecommendation = () => {
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState<string | null>(null);

    const fetchRecommendation = useCallback(async (name: string, description: string) => {
        setLoading(true);
        const result = await getCraftRecommendation(name, description);
        setRecommendation(result);
        setLoading(false);
    }, []);

    return { loading, recommendation, fetchRecommendation };
};
