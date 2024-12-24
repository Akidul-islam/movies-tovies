'use client';
import { useState } from 'react';

import { Select, SelectContent, SelectItem } from '../ui/select';
import { SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';


export function MediaFiltered({ URL }: { URL: string }) {
const [selectedItems, setSelectedItems] = useState<string[]>([]);

const handleSelection = (value: string) => {
  setSelectedItems((prev) =>
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
  );
};

const renderPlaceholder = () =>
  selectedItems.length > 0 ? selectedItems.join(', ') : 'Select Theme';

return (
  <Select>
    <SelectTrigger className='w-[180px]'>
      <SelectValue placeholder={renderPlaceholder()} />
    </SelectTrigger>
    <SelectContent>
      <div className='p-2'>
        <div className='flex items-center gap-2'>
          <Checkbox
            checked={selectedItems.includes('light')}
            onCheckedChange={() => handleSelection('light')}
          />
          <span>Light</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <Checkbox
            checked={selectedItems.includes('dark')}
            onCheckedChange={() => handleSelection('dark')}
          />
          <span>Dark</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <Checkbox
            checked={selectedItems.includes('system')}
            onCheckedChange={() => handleSelection('system')}
          />
          <span>System</span>
        </div>
      </div>
    </SelectContent>
  </Select>
);
}
