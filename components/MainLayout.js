import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

// props method
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

// higher order component method:
export const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    )
}

export default Layout