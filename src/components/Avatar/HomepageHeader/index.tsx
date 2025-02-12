import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header>
            <div className="container">
                <h1 className='text--center padding-top--lg'>
                    Home
                </h1>
            </div>
        </header>
    );
}

export default HomepageHeader;