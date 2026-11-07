import NavLinks from './NavLinks';

export default function Header() {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold">Florencio Varela Ward</p>
                    <p className="text-sm text-blue-100">{today}</p>
                </div>

                <NavLinks />
            </div>
        </header>
    );
}