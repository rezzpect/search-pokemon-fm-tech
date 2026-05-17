'use client';

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
    const [input, setInput] = useState<string>(useSearchParams().get("name") || '');
    const router = useRouter();

    const createSearchParams = (name: string) => {
        const params = new URLSearchParams();
        if (name) {
            params.set("name",name);
        }else {
            params.delete("name");
        }
        return params.toString();
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/?${createSearchParams(input)}`);
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
                <input
                    type="text"
                    placeholder="Search for a Pokémon..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-green-500 text-white rounded-lg px-2">Submit</button>
            </form>
        </div>
    );
}