import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mise Academy" },
      { name: "description", content: "Talk to our admissions and mentor team at Mise Academy." },
      { property: "og:title", content: "Contact — Mise Academy" },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: Mail, label: "Email", value: "hello@miseacademy.com" },
  { icon: Phone, label: "Phone", value: "+92 3330168584" },
];

function ContactPage() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Get in touch</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Curious about a course, a plan, or hiring our graduates? We usually reply within a few hours.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div className="space-y-4">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              toast.success("Thanks! We'll be in touch soon.");
              (e.target as HTMLFormElement).reset();
            }, 600);
          }}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" required placeholder="Course inquiry, hiring, etc." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={5} required placeholder="Tell us a bit more..." />
            </div>
            <Button disabled={loading} className="bg-gradient-primary text-primary-foreground hover:opacity-95">
              {loading ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
