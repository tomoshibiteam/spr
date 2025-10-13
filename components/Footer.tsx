import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { href: '/mission', label: 'Mission' },
        { href: '/vision', label: 'Vision' },
        { href: '/about', label: 'About' },
      ]
    },
    {
      title: 'Business',
      links: [
        { href: '/projects', label: 'Projects' },
        { href: '/projects/spr', label: 'SPR探偵事務所' },
      ]
    },
    {
      title: 'Information',
      links: [
        { href: '/news', label: 'News' },
        { href: '/contact', label: 'Contact' },
      ]
    }
  ]

  return (
    <footer className="bg-tomoshibi-brown text-tomoshibi-beige">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">TOMOSHIBI</h3>
            <p className="text-sm text-tomoshibi-beige text-opacity-80">
              社会の闇に灯火をともす
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-tomoshibi-beige text-opacity-80 hover:text-tomoshibi-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-tomoshibi-beige border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-tomoshibi-beige text-opacity-60">
              © {currentYear} TOMOSHIBI Inc. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                href="/privacy"
                className="text-sm text-tomoshibi-beige text-opacity-60 hover:text-tomoshibi-gold transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
              <Link 
                href="/terms"
                className="text-sm text-tomoshibi-beige text-opacity-60 hover:text-tomoshibi-gold transition-colors duration-200"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

