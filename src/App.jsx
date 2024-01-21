import React from 'react';

const App = () => {
  return (
    <div>
      <Container>
        <Card>
          <Description>
            <h1>Get <span>insights</span> that help your business grow.</h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <Stats>
              <Stat number="10k+" name="companies" />
              <Stat number="314" name="templates" />
              <Stat number="12M+" name="queries" />
            </Stats>
          </Description>
          <CardImage />
        </Card>
      </Container>
    </div>
  );
};

const Container = ({ children }) => <div className="container">{children}</div>;

const Card = ({ children }) => <div className="card">{children}</div>;

const Description = ({ children }) => <div className="desc">{children}</div>;

const Stats = ({ children }) => <div className="stats">{children}</div>;

const Stat = ({ number, name }) => (
  <div className="companies">
    <div className="number">{number}</div>
    <div className="name">{name}</div>
  </div>
);

const CardImage = () => <div className="card-img"></div>;

export default App;
