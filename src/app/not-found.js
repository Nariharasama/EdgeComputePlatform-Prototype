"use client";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useRouter } from "next/navigation";

import * as React from "react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className={"grid place-content-center justify-items-center min-h-[500px]"}
    >
      <div>
        <Alert
          severity="error"
          variant="standard"
          action={
            <Button
              color="error"
              onClick={() => router.push("./")}
              disableRipple
              className={"normal-case"}
            >
              Home
            </Button>
          }
        >
          <AlertTitle>Error:404 Page Not Found</AlertTitle>
          Please check the address or go back to the Homepage.
        </Alert>
      </div>
    </div>
  );
}
