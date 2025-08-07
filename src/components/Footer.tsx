
import { useEffect, useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FlipLink from './ui/text-effect-flipper';

export default function Footer() {
    const [dateTime, setDateTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setDateTime(`${date} ${time}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full bg-transparent px-4 py-6 mt-10">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <FlipLink href="#">C&S</FlipLink>

                <div className="flex gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="size-7 text-white" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="size-7 text-white" />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Bottom - Date, Time, and Author */}
            <div className="flex justify-between items-center flex-wrap mt-6 text-sm text-muted-foreground">
                <div className="flex justify-between items-center w-full text-white text-lg">
                    <span>Built with ❤️ by codngwthubaid</span>
                    <span>{dateTime}</span>
                </div>
            </div>
        </footer>
    );
}
