import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div id="header-title" className="text-2xl font-bold">Sacrament Meeting Scheduler</div>
                <nav aria-label="Main navigation">
                    <NavLinks /> 
                </nav>
            </div>
        </header>
    );
}