export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 print:hidden">
            <div className="container mx-auto text-center">
                <p>Copyright &copy; {new Date().getFullYear()} | Marcos Ferreyra | All rights reserved</p>
            </div>
        </footer>
    );
}