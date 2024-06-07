'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

const eventSchema = z.object({
  category: z.string().min(1, { message: 'Category is required' }),
  content: z
    .string()
    .min(1, { message: 'Content is required' })
    .max(100, { message: 'Content must be at most 100 characters' }),
})

type EventSchema = z.infer<typeof eventSchema>

const Events: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
  })

  const onSubmit = (data: EventSchema) => {
    console.log('Form Data:', data)
  }

  return (
    <div>
      <h1>Event Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Category:</label>
          <input type="text" {...register('category')} />
          {errors.category && (
            <p style={{ color: 'red' }}>{errors.category.message}</p>
          )}
        </div>
        <div>
          <label>Content:</label>
          <input type="text" {...register('content')} />
          {errors.content && (
            <p style={{ color: 'red' }}>{errors.content.message}</p>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Events
