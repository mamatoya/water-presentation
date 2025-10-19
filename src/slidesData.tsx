import type { SlideContent, TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    name: 'JoAnn',
    role: '',
    skills: [
      'Touch Designer',
      'Sound',
      'Narration'
    ]
  },
  {
    name: 'Gabriella',
    role: '',
    skills: [
      'Storyboard',
      'Movie Editing',
      'Pixera'
    ]
  },
  {
    name: 'Mike',
    role: '',
    skills: [
      'Narrative',
      'UX',
      'Content'
    ]
  }
];

export const slidesData: SlideContent[] = [
  {
    id: 1,
    type: 'title',
    content: (
      <>
        <h1 style={{ textAlign: 'center' }}>
          Canals Carry<br />Water and History
        </h1>
        <p style={{ fontSize: '1.2em', marginTop: '40px' }}>Team AZwater2030 @ ReMIX the Future</p>
        <p style={{ fontSize: '1.2em' }}>Experience Track - October 2025</p>
        <p style={{ fontSize: '1em', marginTop: '30px', color: 'rgba(255, 255, 255, 0.8)' }}>JoAnn, Gabriella, Mike</p>
      </>
    )
  },
  {
    id: 2,
    type: 'team',
    title: 'Meeting team AZwater2030',
  },
  {
    id: 3,
    type: 'content',
    title: 'Land Acknowledgment',
    content: (
      <>
        <p className="quote">
          The lands that comprise present-day Mesa are culturally affiliated with the O'odham,
          Piipaash, and their ancestors.
        </p>
        <p>
          The City of Mesa acknowledges that we gather on the homeland of the Native people and
          their ancestors, who have inhabited this landscape from time immemorial to the present day.
        </p>
        <p style={{ marginTop: '30px' }}>
          The Hohokam people prototyped the basis for our modern canal infrastructure, pumping
          the lifeblood of the land's natural rivers through arroyos, connecting civilization to
          lush abundance.
        </p>
      </>
    )
  },
  {
    id: 4,
    type: 'content',
    title: 'Project Vision',
    content: (
      <>
        <h3>Our Vision</h3>
        <p>
          To create awareness and action around water sustainability in Arizona through immersive,
          educational experiences that connect communities to the lifeblood of their landscape.
        </p>

        <h3>What Change Will Occur?</h3>
        <ul>
          <li>Increased public awareness of water scarcity issues</li>
          <li>Community engagement with local water policy</li>
          <li>Connection between technology, industrial growth, and water resources</li>
          <li>Advocacy for sustainable practices and gradual utility rate adjustments</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    type: 'content',
    title: 'The Challenge: Water Scarcity in the Desert',
    content: (
      <>
        <h3>Critical Issues:</h3>
        <ul>
          <li><span className="emphasis">Growing population</span> in an arid desert climate</li>
          <li><span className="emphasis">Industrial activities:</span> Data centers, semiconductors, chip factories</li>
          <li><span className="emphasis">85% of water</span> used for industrial purposes</li>
          <li>Loss of keystone flora and fauna species</li>
        </ul>

        <div className="data-highlight">
          <p><strong>Data center power demand will grow 160% by 2030</strong></p>
          <p>
            AI-driven workloads are accelerating data center growth, using extensive amounts of water
            for cooling systems, rendering it contaminated and improperly recycled.
          </p>
        </div>
      </>
    )
  },
  {
    id: 6,
    type: 'content',
    title: 'Status Quo',
    content: (
      <>
        <ul>
          <li>Citizens remain unaware of the water crisis</li>
          <li>Data centers built on historically indigenous and Hispanic communities</li>
          <li>Utility rates will increase 30% with "rate shock"</li>
          <li>Natural environments continue to be devastated</li>
          <li>Colorado River resources further depleted</li>
        </ul>
      </>
    )
  },
  {
    id: 7,
    type: 'content',
    title: 'Connecting Through Experience',
    content: (
      <>
        <h3>What Distinguishes Our Approach?</h3>
        <ul>
          <li><strong>Immersive storytelling</strong> through multi-sensory experiences</li>
          <li><strong>Historical narrative</strong> from Hohokam canals to modern infrastructure</li>
          <li><strong>Spatial audio and binaural beats</strong> to create emotional impact</li>
          <li><strong>Visual representations</strong> of water systems as human veins</li>
        </ul>

        <p style={{ marginTop: '30px' }}>
          Making the invisible visible - helping people understand that when they turn on the tap,
          there's a complex story of history, infrastructure, policy, and threatened resources behind that water.
        </p>
      </>
    )
  },
  {
    id: 8,
    type: 'content',
    title: 'Our Approach',
    content: (
      <>
        <h3 style={{ fontSize: '1.5em' }}>ancient water stewardship → industrialization → impact → taking water agency</h3>
        <ul>
          <li>
            <strong>Visual:</strong> Touch Designer & Pixera projections showing:
            <ul>
              <li>Human water veins superimposed with canal systems</li>
              <li>Lost/endangered desert ecosystems</li>
              <li>Historical progression: Hohokam → Mormon settlers → SRP → Modern data centers</li>
            </ul>
          </li>
          <li><strong>Audio:</strong> Spatial sound design with transitions from flowing water to server humming</li>
          <li><strong>Scent:</strong> Creosote diffuser to evoke desert environment</li>
          <li><strong>Interactive:</strong> Live water feature that gradually dries up during the presentation</li>
        </ul>
      </>
    )
  },
  {
    id: 9,
    type: 'content',
    title: 'Road Map',
    content: (
      <>
        <h3>Short-term Goals (2025):</h3>
        <ul>
          <li>Create compelling immersive experience at ReMIX showcase</li>
          <li>Immerse 100+ attendees in the history and future of water</li>
          <li>Generate actionable awareness</li>
        </ul>

        <h3>Long-term Goals (2030):</h3>
        <ul>
          <li>Inspire public to contact state representatives</li>
          <li>Advocate for sustainable data center regulations</li>
          <li>Support gradual utility rate increases to avoid "rate shock"</li>
          <li>Promote public spaces around canals with better maintenance</li>
          <li>Connect communities to nature and water resources</li>
        </ul>
      </>
    )
  },
  {
    id: 10,
    type: 'content',
    title: 'Solutions & Accountability',
    content: (
      <>
        <h3>What Can Be Done?</h3>
        <ul>
          <li><strong>Industry Accountability:</strong> Kick off Arizona net zero water impact policy, modeling Google's stewardship, and hold industry accountable to create water replenishment</li>
          <li><strong>Education:</strong> Make water policy information approachable and engaging</li>
          <li><strong>Community Design:</strong> Have industry reinvest into outdoor publicly accessible areas, transforming canals into public spaces with shade structures, surf parks, and tree-lined pathways</li>
        </ul>

        <div className="data-highlight">
          <p><strong>Call to Action:</strong></p>
          <p>
            Visit AZwater2030.com to explore how industries water practices can only be changed at the state level, but will soon impact your utilities bills in cities across Arizona. Learn more about what everyday people can do about it.
          </p>
        </div>
      </>
    )
  },
  {
    id: 11,
    type: 'content',
    title: 'Learn More & Take Action',
    content: (
      <>
        <h3>Key Resources:</h3>
        <ul>
          <li>Central Arizona Project: cap-az.com</li>
          <li>Salt River Project: srpnet.com</li>
          <li>AZ Water Innovation: azwaterinnovation.asu.edu</li>
          <li>Mesa Land Acknowledgment: mesaaz.gov</li>
          <li>UN Water & Sanitation Goals: un.org/sustainabledevelopment</li>
        </ul>

        <h3>Contact Your Representatives:</h3>
        <p>Arizona State Legislature - Water is a state issue</p>
        <p>Learn about local water credits, compacts with Mexico, and direct actions you can take</p>
      </>
    )
  }
];
