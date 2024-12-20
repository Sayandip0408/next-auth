import { auth } from '@/auth';
import React from 'react';
import { redirect } from 'next/navigation';

const Secret = async () => {
    const session = await auth();
    if (!session) return redirect('/profile')
    return (
        <div>Welcome to the Secret content</div>
    )
}

export default Secret