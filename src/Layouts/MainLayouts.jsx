import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToogle";
import React from "react";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div>
      <Button className="bg-card text-card-foreground dark:bg-card-dark dark:text-card-dark-foreground">
        Click Me
      </Button>

      <ModeToggle />
      <p className="bg-amber-300 dark:bg-amber-800">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio,
        ducimus dolore facilis blanditiis nostrum cum inventore esse deleniti
        dolor rem est expedita natus harum aspernatur quidem veritatis, possimus
        omnis.
      </p>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayouts;
