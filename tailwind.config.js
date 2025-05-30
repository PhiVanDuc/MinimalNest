/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		aspectRatio: {
			'3/4': '3 / 4',
			'16/15': '16 / 15',
			'16/14': '16 / 14',
			'16/13': '16 / 13',
			'16/12': '16 / 12',
			'16/11': '16 / 11',
			'16/10': '16 / 10',
			'16/8': '16 / 8',
			'16/7': '16 / 7',
			'16/6': '16 / 6',
			'16/5': '16 / 5'
		},
  		colors: {
			darkBold: '#404040',
			darkMedium: '#737373',
			darkBland: '#A1A1A1',
			yellowBold: '#F29E50',
			yellowMedium: '#F3F0EA',
			yellowBland: '#FAF8F4',
			blueChecked: '#26AA99',
			blueChart: '#487FFF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'shine': {
				'0%': { 'background-position': '100%' },
				'100%': { 'background-position': '-100%' },
			},
			'star-movement-bottom': {
				'0%': { transform: 'translate(0%, 0%)', opacity: '1' },
				'100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
			},
			'star-movement-top': {
				'0%': { transform: 'translate(0%, 0%)', opacity: '1' },
				'100%': { transform: 'translate(100%, 0%)', opacity: '0' },
			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'shine': 'shine 5s linear infinite',
			'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        	'star-movement-top': 'star-movement-top linear infinite alternate',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
