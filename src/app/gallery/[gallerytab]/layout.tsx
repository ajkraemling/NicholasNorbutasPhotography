export default function DashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-white">
            {children}
        </div>
    )
}