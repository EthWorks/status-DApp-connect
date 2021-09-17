module.exports = {
	purge: ["./src/**/*.css", "./**/*.html"],
	darkMode: false,
	theme: {
		boxShadow: {
			DEFAULT: '0px 10px 15px rgba(31, 41, 55, 0.1), 0px 0px 6px rgba(31, 41, 55, 0.05)',
			none: 'none',
		},
		colors: {
			rectangle96: '#1746CA',
			rectangle97: '#132644',
			rectangle98: '#8BC3DE',
			rectangle99: '#E1FF67',
			rectangle101: '#242424',
			rectangle102: '#fff',
			black: '#000000',
			blue: '#3A71F9',
			grey: '#D5D5D5',
			green: '#60D086',
		},
		container: {
			padding: {
				DEFAULT: '1.5rem',
				md: '2rem',
			},
		},
		fontFamily: {
			'body': ['"Helvetica"'],
			'special': ['"Open Sans"']
		},
		screens: {
			'none': '100%',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1340px',
			'xxl': '1404px',
			'xxxl': '1700px'
		},
		extend: {
			backgroundImage: theme => ({
				'link-arrow-black': "url('../assets/images/arrow/arrow-black.svg')",
				'link-arrow-blue': "url('../assets/images/arrow/arrow-blue.svg')",
				'link-arrow-green': "url('../assets/images/arrow/arrow-green.svg')",
			}),
			fontFamily: {
				'sans': 'Helvetica'
			},
			fontSize: {
				title: ['32px', '38px'],
				'3.5xl': ['40px', '48px'],
			},
			gap: theme => ({
				'22': '5.5rem',
				'26': '6.875rem',
			}),
			height: theme => ({
				'17': '4.188rem',
				'58': '14.5rem',
				'88': '22rem',
			}),
			minHeight: theme => ({
				'code': '22rm'
			}),
			width: theme => ({
				'17': '4.188rem',
				'22': '5.5rem',
			}),
			maxWidth: theme => ({
				'31': '31rem',
				'32.5': '32.5rem',
				'code': '38.375rem'
			}),
			padding: theme => ({
				'13': '3.125rem',
				'15': '3.75rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'25': '6.25rem',
				'26': '6.5rem',
				'35': '8.75rem',
			}),
			margin: theme => ({
				'15': '3.75rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'25': '6.25rem',
				'26': '6.5rem',
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
