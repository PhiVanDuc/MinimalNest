"use client"

import { Badge } from '../ui/badge';
import ShinyText from './react-bits/ShinyText';

export default function CustomBadge({ text, badgeClassName, textClassName }) {
    return (
        <Badge className={badgeClassName}>
            <ShinyText text={text} disabled={false} speed={3} className={textClassName} />
        </Badge>
    )
}
