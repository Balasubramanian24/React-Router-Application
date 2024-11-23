export default function Faq() {
    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                <div className="faq-item">
                    <input type="checkbox" id="faq1" className="faq-toggle" />
                    <label htmlFor="faq1" className="faq-question">
                        What is React?
                    </label>
                    <div className="faq-answer">
                        React is a JavaScript library for building user interfaces.
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq2" className="faq-toggle" />
                    <label htmlFor="faq2" className="faq-question">
                        How do I install React?
                    </label>
                    <div className="faq-answer">
                        You can install React using npm or yarn by running `npm install react`.
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq3" className="faq-toggle" />
                    <label htmlFor="faq3" className="faq-question">
                        What is a React component?
                    </label>
                    <div className="faq-answer">
                        A React component is a reusable piece of UI that can have its own state and props.
                    </div>
                </div>
            </div>
        </div>
    );
};

