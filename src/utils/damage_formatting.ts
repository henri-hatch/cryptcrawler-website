interface DamageEnhancement {
  key: string;
  damageRegex: RegExp;
  statusRegex: RegExp;
  iconFile: string;
  color: string;
}

const DAMAGE_ICON_BASE_PATH = '/damage-icons/';

const DAMAGE_ENHANCEMENTS: DamageEnhancement[] = [
  {
    key: 'acid',
    damageRegex: /\bacid damage\b/gi,
    statusRegex: /\bpoisoned\b/gi,
    iconFile: 'Acid.png',
    color: '#3e8450',
  },
  {
    key: 'cold',
    damageRegex: /\bcold damage\b/gi,
    statusRegex: /\bfrozen\b/gi,
    iconFile: 'Cold.png',
    color: '#2f66b8',
  },
  {
    key: 'fire',
    damageRegex: /\bfire damage\b/gi,
    statusRegex: /\bburning\b/gi,
    iconFile: 'Fire.png',
    color: '#d96b26',
  },
  {
    key: 'lightning',
    damageRegex: /\blightning damage\b/gi,
    statusRegex: /\bshocked\b/gi,
    iconFile: 'Lightning.png',
    color: '#7b64c0',
  },
  {
    key: 'void',
    damageRegex: /\bvoid(?: damage)?\b/gi,
    statusRegex: /\bhollowed\b/gi,
    iconFile: 'Void.png',
    color: '#5a5a5a',
  },
  {
    key: 'necrotic',
    damageRegex: /\bnecrotic(?: damage)?\b/gi,
    statusRegex: /\bfrightened\b/gi,
    iconFile: 'Necrotic.png',
    color: '#1f1f1f',
  },
  {
    key: 'radiant',
    damageRegex: /\bradiant(?: damage)?\b/gi,
    statusRegex: /\bblinded\b/gi,
    iconFile: 'Radiant.png',
    color: '#c8a032',
  },
  {
    key: 'physical',
    damageRegex: /\bphysical(?: damage)?\b/gi,
    statusRegex: /\bbleeding\b/gi,
    iconFile: 'Physical.png',
    color: '#b34343',
  },
  {
    key: 'psychic',
    damageRegex: /\bpsychic(?: damage)?\b/gi,
    statusRegex: /\bstrain\b/gi,
    iconFile: 'Psychic.png',
    color: '#4f748a',
  },
  {
    key: 'thunder',
    damageRegex: /\bthunder(?: damage)?\b/gi,
    statusRegex: /\bprone\b/gi,
    iconFile: 'Thunder.png',
    color: '#b058a0',
  },
];

const buildTokenMarkup = (
  text: string,
  color: string,
  iconFile: string,
  underline: boolean,
  key: string
) => {
  const tokenClass = underline
    ? 'damage-token__text damage-token__text--status'
    : 'damage-token__text';
  const textStyle = `color:${color};${underline ? 'text-decoration:underline;' : ''}`;

  return `<span class="damage-token" data-damage-token="${key}"><img src="${DAMAGE_ICON_BASE_PATH}${iconFile}" alt="" aria-hidden="true" /><span class="${tokenClass}" style="${textStyle}">${text}</span></span>`;
};

const enhanceTextSegment = (segment: string): string => {
  if (segment.trim() === '') {
    return segment;
  }

  let output = segment;
  DAMAGE_ENHANCEMENTS.forEach(({ damageRegex, statusRegex, iconFile, color, key }) => {
    output = output.replace(damageRegex, (match) =>
      buildTokenMarkup(match, color, iconFile, false, key)
    );

    output = output.replace(statusRegex, (match) =>
      buildTokenMarkup(match, color, iconFile, true, key)
    );
  });

  return output;
};

export const formatDamageText = (input?: string | null): string => {
  if (input == null || input === '') {
    return input ?? '';
  }

  const segments = input.split(/(<[^>]+>)/g);

  if (segments.length === 1) {
    return enhanceTextSegment(segments[0]);
  }

  return segments
    .map((segment) => {
      if (/^<[^>]+>$/.test(segment)) {
        return segment;
      }

      return enhanceTextSegment(segment);
    })
    .join('');
};