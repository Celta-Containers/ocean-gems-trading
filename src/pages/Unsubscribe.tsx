import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json();
        if (data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setStatus("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) setStatus("error");
    else if (data?.success || data?.reason === "already_unsubscribed") setStatus("success");
    else setStatus("error");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-section-gradient px-4">
      <div className="bg-card border border-border rounded-xl shadow-sm p-8 max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <Loader2 className="mx-auto mb-4 animate-spin text-primary" size={36} />
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">Verifying…</h1>
          </>
        )}
        {status === "valid" && (
          <>
            <h1 className="font-display text-2xl font-bold text-foreground mb-3">Unsubscribe</h1>
            <p className="text-muted-foreground mb-6">
              Click below to confirm you no longer want to receive emails from Stock Storage Containers.
            </p>
            <Button onClick={handleConfirm} size="lg" className="w-full">
              Confirm unsubscribe
            </Button>
          </>
        )}
        {status === "submitting" && (
          <>
            <Loader2 className="mx-auto mb-4 animate-spin text-primary" size={36} />
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">Processing…</h1>
          </>
        )}
        {(status === "success" || status === "already") && (
          <>
            <CheckCircle2 className="mx-auto mb-4 text-primary" size={48} />
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              {status === "already" ? "Already unsubscribed" : "You're unsubscribed"}
            </h1>
            <p className="text-muted-foreground mb-6">
              You will no longer receive emails from us.
            </p>
            <Link to="/"><Button variant="outline">Back to site</Button></Link>
          </>
        )}
        {(status === "invalid" || status === "error") && (
          <>
            <AlertCircle className="mx-auto mb-4 text-destructive" size={48} />
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              {status === "invalid" ? "Invalid link" : "Something went wrong"}
            </h1>
            <p className="text-muted-foreground mb-6">
              The unsubscribe link is invalid or has expired.
            </p>
            <Link to="/"><Button variant="outline">Back to site</Button></Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
