import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  eventType: z.string().min(1, 'Please select an event type'),
  date: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form Data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 bg-white border border-crimson/20 p-12 shadow-xl"
      >
        <h3 className="text-4xl font-serif text-crimson mb-4">Thank You</h3>
        <p className="text-ink/60 text-lg max-w-md mx-auto">
          Your request has been received. We will reach out to you within 24 hours to discuss your vision.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-crimson font-medium">Full Name</label>
          <input
            {...register('name')}
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-crimson/20 py-3 focus:border-crimson outline-none transition-colors text-ink placeholder:text-ink/20"
          />
          {errors.name && <p className="text-red-600 text-[10px] uppercase tracking-widest">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-crimson font-medium">Email Address</label>
          <input
            {...register('email')}
            placeholder="john@example.com"
            className="w-full bg-transparent border-b border-crimson/20 py-3 focus:border-crimson outline-none transition-colors text-ink placeholder:text-ink/20"
          />
          {errors.email && <p className="text-red-600 text-[10px] uppercase tracking-widest">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-crimson font-medium">Event Type</label>
          <select
            {...register('eventType')}
            className="w-full bg-transparent border-b border-crimson/20 py-3 focus:border-crimson outline-none transition-colors text-ink appearance-none"
          >
            <option value="" className="bg-paper">Select Type</option>
            <option value="weddings" className="bg-paper">Weddings</option>
            <option value="graduation" className="bg-paper">Graduation</option>
            <option value="matric dance" className="bg-paper">Matric Dance</option>
            <option value="christmas" className="bg-paper">Christmas</option>
            <option value="real estate" className="bg-paper">Real Estate</option>
            <option value="street photography" className="bg-paper">Street Photography</option>
          </select>
          {errors.eventType && <p className="text-red-600 text-[10px] uppercase tracking-widest">{errors.eventType.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-crimson font-medium">Preferred Date (Optional)</label>
          <input
            {...register('date')}
            type="date"
            className="w-full bg-transparent border-b border-crimson/20 py-3 focus:border-crimson outline-none transition-colors text-ink [color-scheme:light]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-crimson font-medium">Tell us about your vision</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Share some details about your event or project..."
          className="w-full bg-transparent border-b border-crimson/20 py-3 focus:border-crimson outline-none transition-colors text-ink placeholder:text-ink/20 resize-none"
        />
        {errors.message && <p className="text-red-600 text-[10px] uppercase tracking-widest">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-premium-fill w-full py-5 flex items-center justify-center gap-3 group disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Request Your Session'}
        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}