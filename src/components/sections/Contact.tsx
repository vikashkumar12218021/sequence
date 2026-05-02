import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thanks for reaching out — I'll reply soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">Connect</span></>}
          description="Open to research collaborations, talks, mentoring and student opportunities."
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotateY: 4, rotateX: -2 }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className="lg:col-span-2 glass-card p-7 flex flex-col gap-5 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <h3 className="font-display text-2xl font-bold relative">Reach out</h3>
            <div className="space-y-4 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono uppercase">Email</div>
                  <div className="text-sm">lalit.verma@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono uppercase">Location</div>
                  <div className="text-sm">Lakhimpur, Uttar Pradesh, India</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-auto pt-4 relative">
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" aria-label="GitHub" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all">
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground mb-2 block">Name</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-background/50 border-border/60" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground mb-2 block">Email</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="bg-background/50 border-border/60" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase text-muted-foreground mb-2 block">Message</label>
              <Textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me what you'd like to discuss..." className="bg-background/50 border-border/60 resize-none" />
            </div>
            <Button type="submit" disabled={sending} size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-full glow-primary">
              {sending ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
