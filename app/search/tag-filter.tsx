'use client';

import { Checkbox } from '@/registry/default/ui/checkbox';
import { Label } from '@/registry/default/ui/label';
import { getAllTags } from '@/lib/utils';
import { ScrollArea } from '@/registry/default/ui/scroll-area';
import { Badge } from '@/registry/default/ui/badge';
import { X } from 'lucide-react';


interface TagFilterProps {
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

export default function TagFilter({ selectedTags, onTagChange }: TagFilterProps) {
  const tags = getAllTags();

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      onTagChange([...selectedTags, tag]);
    } else {
      onTagChange(selectedTags.filter((t) => t !== tag));
    }
  };

  const clearAllTags = () => {
    onTagChange([]);
  };

  return (
    <ScrollArea className="h-[calc(100vh-4rem)] p-4 border-r">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filter by Tags</h2>
          {selectedTags.length > 0 && (
            <button
              onClick={clearAllTags}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          )}
        </div>

        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 py-2">
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="gap-1 cursor-pointer hover:bg-secondary/80"
                onClick={() => handleTagChange(tag, false)}
              >
                {tag}
                <X className="h-3 w-3" />
              </Badge>
            ))}
          </div>
        )}

        <div className="space-y-2">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={`tag-${tag}`}
                checked={selectedTags.includes(tag)}
                onCheckedChange={(checked) =>
                  handleTagChange(tag, checked as boolean)
                }
              />
              <Label htmlFor={`tag-${tag}`} className="cursor-pointer">
                {tag}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}