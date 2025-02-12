import { marked } from 'marked';
import nonbreakingSpaces from '../src/index.js';

function trimLines(s) {
  return s.split('\n').map(l => l.trim()).join('\n');
}

describe('Non-Breaking Spaces', ()=>{
  test('Single Space', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines(':>\n\n'))).toMatchSnapshot();
  });

  test('Double Space', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines(':>>\n\n'))).toMatchSnapshot();
  });

  test('Triple Space', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines(':>>>\n\n'))).toMatchSnapshot();
  });

  test('Many Space', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines(':>>>>>>>>>>\n\n'))).toMatchSnapshot();
  });

  test('Multiple sets of Spaces', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines(':>>>\n:>>>\n:>>>'))).toMatchSnapshot();
  });

  test('Pair of inline Spaces', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines(':>>:>>'))).toMatchSnapshot();
  });

  test('Space directly between two paragraphs', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines('Line 1\n:>>\nLine 2'))).toMatchSnapshot();
  });

  test('Ignored inside a code block', function() {
    marked.use(nonbreakingSpaces());
    expect(marked(trimLines('```\n\n:>\n\n```\n'))).toMatchSnapshot();
  });
});
