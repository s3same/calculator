import { useState } from 'react';
import './App.css';
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from '@/components/mode-toggle';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ModeToggle></ModeToggle>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="decimal-number">Decimal Number</Label>
        <Input type="numeric" id="decimal-number" placeholder="Decimal Number" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="binary-number">Binary Number</Label>
        <Input type="string" id="binary-number" placeholder="Binary Number" />
      </div>
    </ThemeProvider>
  );
}

export default App;
