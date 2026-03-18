
import React from 'react';
import { Section } from '../types';
import { Menu, X, Search } from 'lucide-react';

interface LayoutProps {
  currentSection: Section;
  setSection: (s: Section) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentSection, setSection, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'exhibition', label: '沉浸观展' },
    { id: 'exploration', label: '历史探秘' },
    { id: 'heritage', label: '文化传承' },
    { id: 'revolutionary', label: '文艺革命文物' },
    { id: 'relics', label: '标志性文物分类' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 woodcut-texture pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#9c3d3d] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setSection('home')}>
              <div className="w-12 h-12 bg-[#f5e9db] flex items-center justify-center rounded-sm overflow-hidden border-2 border-[#b08d57]/30 shadow-inner">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#9c3d3d] fill-current drop-shadow-sm">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-widest hidden sm:block">革命文物数字传播平台</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSection(item.id as Section)}
                  className={`px-3 py-2 text-sm font-medium tracking-widest transition-all duration-300 relative group
                    ${currentSection === item.id ? 'text-[#f5e9db]' : 'text-red-100 hover:text-white'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#b08d57] transition-transform duration-300 
                    ${currentSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSection('relics')}
                className="p-2 hover:bg-red-800 rounded-full transition-colors"
              >
                <Search size={20} />
              </button>
              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#8b3535] border-t border-red-800 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSection(item.id as Section);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-white border-b border-red-700 last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow z-10 relative">
        {children}
      </main>

      <footer className="bg-[#2d241e] text-[#f5e9db] py-12 px-6 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 serif">革命文物数字传播平台</h2>
            <p className="text-sm opacity-70 leading-relaxed max-w-md">
              致力于通过现代数字化技术，抢救性保护并创新展示延安时期的红色艺术遗产，让革命精神在数字空间永续流传。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#5d4c3c] pb-2">快速链接</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:text-[#b08d57] cursor-pointer">关于我们</li>
              <li className="hover:text-[#b08d57] cursor-pointer">艺术研究</li>
              <li className="hover:text-[#b08d57] cursor-pointer">教育资源</li>
              <li className="hover:text-[#b08d57] cursor-pointer">版权声明</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#5d4c3c] text-center text-xs opacity-50">
          © 2024 革命文物数字传播平台. 版权所有.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
