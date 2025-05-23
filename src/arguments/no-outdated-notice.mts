import type { ArgsDef } from 'citty'

export const NoOutdatedCheckArg = {
	'no-outdated-check': {
		default: false,
		description:
			'Will not check for latest kysely/kysely-ctl versions and notice newer versions exist.',
		type: 'boolean',
	},
} satisfies ArgsDef
