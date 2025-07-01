export function Examples() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 p-2">
        <div className="text-4xl font-bold">Buttons</div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <button>Primary</button>
            <button>Secondary</button>
            <button>Asset</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-2">
        <div className="text-4xl font-bold">Typography</div>
        <hr />
        <div className="flex gap-4">
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <div>Regular text</div>
            <div className="emphasis-text">Emphasis text</div>
          </div>
          <div>
            <div className="primary-text">Primary text</div>
            <div className="secondary-text">Secondary text</div>
            <div className="asset-text">Asset text</div>
          </div>
        </div>
      </div>
    </div>
  );
}
