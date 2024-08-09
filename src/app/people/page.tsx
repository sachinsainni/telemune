import Reveal from '@/components/animation/Reveal'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className='md:mx-12 mx-4  my-12' >
                <Reveal>
                    <p className="text-neutral-600 dark:text-orange-600 underline text-4xl mt-6 ">
                        Growth
                    </p>
                </Reveal>
                <TextGenerateEffect words='At Telemune, we see people as multi-faceted and multi-talented. We encourage our associates to take ownership and be creative – whilst fostering an environment where they know they can always call on team mates and managers for support. We also encourage our people to expand their experience and try different roles. We provide training to support people as they take on new roles. And we mentor team members as they enter new areas or expand their remit. Many of our leadership team and managers have worked in different roles – some moving from development to pre-sales and business development, others to product development or project management. Our philosophy is to recognize the positives, believing people flourish when they focus on the positives.' duration={0.3} />
            </div>
        </div>
    )
}
