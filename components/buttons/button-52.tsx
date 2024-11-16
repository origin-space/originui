'use client';

import { Bell } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function NotificationButton() {
    const [count, setCount] = useState(100);

    const handleClick = () => {
        if (count > 0) {
            setCount(0);
        }
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={handleClick}
            aria-label={`${count} unread notifications`}
        >
            <Bell
                size={16}
                aria-hidden="true"
            />
            {count > 0 && (
                <span
                    className="absolute inline-flex items-center justify-center min-w-[20px] pt-1 h-5 px-1 text-xs font-bold text-primary-foreground bg-primary rounded-full -top-2 -right-2"
                    aria-hidden="true"
                >
                    {count > 99 ? "99+" : count}
                </span>
            )}
        </Button>
    );
}