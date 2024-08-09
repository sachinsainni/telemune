import {
    IconRibbonHealth,
    IconParachute,
    IconUsers,
    IconHeartHandshake,
    IconBulb,
    IconRocket,
    IconBrandTeams,
    IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { HoverEffectCard } from "../ui/hover-effect";
import Reveal from "@/components/animation/Reveal"

export function CoreValue() {
    const features = [
        {
            title: "Innovation",
            description:
                "Innovation drives progress and opens up new possibilities for growth and improvement.",
            icon: <IconBulb />,
        },
        {
            title: "Goals",
            description:
                "Setting clear goals helps guide your efforts and measure progress toward achieving success.",
            icon: <IconRocket />,
        },
        {
            title: "Teamwork",
            description:
                "Effective teamwork fosters collaboration and leverages diverse skills to achieve shared objectives more efficiently.",
            icon: <IconBrandTeams />,
        },
        {
            title: "Commitment",
            description: "Commitment ensures sustained effort and progress toward achieving goals.",
            icon: <IconRosetteDiscountCheckFilled />,
        },
        {
            title: "Integrity",
            description: "Integrity builds trust and credibility by consistently upholding ethical principles.",
            icon: <IconHeartHandshake />,
        },
        {
            title: "Customers",
            description:
                "Understanding customers' needs is essential for delivering exceptional service and building lasting relationships.",
            icon: <IconUsers />,
        },
        {
            title: "Responsibility",
            description:
                "Taking responsibility ensures accountability and fosters a reliable and trustworthy environment.",
            icon: <IconParachute />,
        },
        {
            title: "Quality",
            description: "Maintaining high quality ensures customer satisfaction and long-term success.",
            icon: <IconRibbonHealth />,
        },
    ];
    return (
        <div className="my-4">
            <Reveal>
                <p className="text-neutral-600 dark:text-neutral-200 text-4xl mt-6 ">
                    Core Values
                </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <HoverEffectCard key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}