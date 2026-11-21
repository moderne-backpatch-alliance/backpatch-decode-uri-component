import test from 'ava';
import m from './';

test('malformed input of 1000 percent-encoded bytes decodes within 1000 ms', t => {
	const input = '%ab'.repeat(1000);
	const start = Date.now();
	const result = m(input);
	const elapsed = Date.now() - start;

	t.is(result.length, input.length);
	t.is(result, input);
	t.true(elapsed < 1000, `took ${elapsed} ms`);
});
