import { cn } from '@/lib/utils'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export const Table = ({ className }: { className?: string }) => {
    const customers = [
        {
            id: 1,
            date: '10/31/2023',
            status: 'Paid',
            statusVariant: 'success',
            name: 'Bernard Ng',
            avatar: BERNARD_AVATAR,
            revenue: '$43.99',
        },
        {
            id: 2,
            date: '10/21/2023',
            status: 'Ref',
            statusVariant: 'warning',
            name: 'Méschac Irung',
            avatar: MESCHAC_AVATAR,
            revenue: '$19.99',
        },
        {
            id: 3,
            date: '10/15/2023',
            status: 'Paid',
            statusVariant: 'success',
            name: 'Glodie Ng',
            avatar: GLODIE_AVATAR,
            revenue: '$99.99',
        },
        {
            id: 4,
            date: '10/12/2023',
            status: 'Cancelled',
            statusVariant: 'danger',
            name: 'Theo Ng',
            avatar: THEO_AVATAR,
            revenue: '$19.99',
        },
    ]

    return (
        <div className={cn('bg-illustration ring-border-illustration shadow-black/6.5 from-card/50 relative mx-auto max-w-4xl rounded-2xl border border-transparent p-6 shadow-md ring-1', className)}>
            <div className="mb-4">
                <div className="font-medium">Customers</div>
                <p className="text-muted-foreground mt-0.5 line-clamp-1 text-sm">New users by First user primary channel group (Default Channel Group)</p>
            </div>
            <table
                className="w-max table-auto border-collapse lg:w-full"
                data-rounded="medium">
                <thead className="dark:bg-background bg-foreground/5">
                    <tr className="*:border *:p-3 *:text-left *:text-sm *:font-medium">
                        <th className="rounded-l-[--card-radius]">#</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Customer</th>
                        <th className="rounded-r-[--card-radius]">Revenue</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {customers.map((customer) => (
                        <tr
                            key={customer.id}
                            className="*:border *:p-2">
                            <td>{customer.id}</td>
                            <td>{customer.date}</td>
                            <td>
                                <span className={cn('inset-ring-1 inset-ring-foreground/10 rounded-full px-2 py-1 text-xs', customer.statusVariant == 'success' && 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-200', customer.statusVariant == 'danger' && 'bg-rose-500/10 text-rose-800 dark:text-rose-200', customer.statusVariant == 'warning' && 'bg-amber-500/10 text-amber-800 dark:text-amber-200')}>{customer.status}</span>
                            </td>
                            <td>
                                <div className="text-title flex items-center gap-2">
                                    <div className="before:border-foreground/10 relative size-5 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                        <img
                                            src={customer.avatar}
                                            alt={customer.name}
                                            width="40"
                                            height="40"
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <span className="text-foreground">{customer.name}</span>
                                </div>
                            </td>
                            <td>{customer.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}