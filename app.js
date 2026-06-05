// ======================================================
// DATOS DE EQUIPOS — kit SVG inline (camiseta pequeña)
// ======================================================
const teamKits = {
    // Grupo A
    'México':          { home: '#006847', away: '#FFFFFF', stroke: '#CE1126' },
    'Sudáfrica':       { home: '#007A4D', away: '#FFFFFF', stroke: '#FFB81C' },
    'Corea del Sur':   { home: '#C60C30', away: '#FFFFFF', stroke: '#003478' },
    'Rep. Checa':      { home: '#D7141A', away: '#FFFFFF', stroke: '#11457E' },
    // Grupo B
    'Canadá':          { home: '#FF0000', away: '#FFFFFF', stroke: '#000000' },
    'Bosnia y Herz.':  { home: '#002395', away: '#FFCC00', stroke: '#FFFFFF' },
    'Qatar':           { home: '#8D1B3D', away: '#FFFFFF', stroke: '#8D1B3D' },
    'Suiza':           { home: '#FF0000', away: '#FFFFFF', stroke: '#FF0000' },
    // Grupo C
    'Brasil':          { home: '#FFDF00', away: '#FFFFFF', stroke: '#009C3B' },
    'Marruecos':       { home: '#C1272D', away: '#FFFFFF', stroke: '#006233' },
    'Haití':           { home: '#00209F', away: '#FFFFFF', stroke: '#D21034' },
    'Escocia':         { home: '#003087', away: '#FFFFFF', stroke: '#003087' },
    // Grupo D
    'E. Unidos':       { home: '#002868', away: '#FFFFFF', stroke: '#BF0A30' },
    'Paraguay':        { home: '#D52B1E', away: '#FFFFFF', stroke: '#0038A8' },
    'Australia':       { home: '#FFCD00', away: '#FFFFFF', stroke: '#00843D' },
    'Turquía':         { home: '#E30A17', away: '#FFFFFF', stroke: '#E30A17' },
    // Grupo E
    'Alemania':        { home: '#FFFFFF', away: '#000000', stroke: '#000000' },
    'Curazao':         { home: '#003DA5', away: '#FFD100', stroke: '#FFFFFF' },
    'Costa de Marfil': { home: '#FF8200', away: '#FFFFFF', stroke: '#009A44' },
    'Ecuador':         { home: '#FFD100', away: '#FFFFFF', stroke: '#003DA5' },
    // Grupo F
    'Países Bajos':    { home: '#FF6600', away: '#FFFFFF', stroke: '#FF6600' },
    'Japón':           { home: '#0033A0', away: '#FFFFFF', stroke: '#BC002D' },
    'Suecia':          { home: '#006AA7', away: '#FFFFFF', stroke: '#FECC02' },
    'Túnez':           { home: '#E70013', away: '#FFFFFF', stroke: '#FFFFFF' },
    // Grupo G
    'Bélgica':         { home: '#ED2939', away: '#FFFFFF', stroke: '#000000' },
    'Egipto':          { home: '#C8102E', away: '#000000', stroke: '#FFFFFF' },
    'Irán':            { home: '#FFFFFF', away: '#239F40', stroke: '#DA0000' },
    'Nueva Zelanda':   { home: '#000000', away: '#FFFFFF', stroke: '#FFFFFF' },
    // Grupo H
    'España':          { home: '#AA151B', away: '#FFFFFF', stroke: '#F1BF00' },
    'Cabo Verde':      { home: '#003893', away: '#FCD116', stroke: '#CE1126' },
    'Arabia Saudita':   { home: '#006C35', away: '#FFFFFF', stroke: '#006C35' },
    'Uruguay':         { home: '#5FAADC', away: '#FFFFFF', stroke: '#5FAADC' },
    // Grupo I
    'Francia':         { home: '#002395', away: '#FFFFFF', stroke: '#ED2939' },
    'Senegal':         { home: '#00853F', away: '#FFFFFF', stroke: '#FDEF42' },
    'Irak':            { home: '#CE1126', away: '#FFFFFF', stroke: '#007A3D' },
    'Noruega':         { home: '#BA0C2F', away: '#FFFFFF', stroke: '#00205B' },
    // Grupo J
    'Argentina':       { home: '#75AADB', away: '#FFFFFF', stroke: '#75AADB' },
    'Argelia':         { home: '#006233', away: '#FFFFFF', stroke: '#D21034' },
    'Austria':         { home: '#ED2939', away: '#FFFFFF', stroke: '#FFFFFF' },
    'Jordania':        { home: '#FFFFFF', away: '#CE1126', stroke: '#007A3D' },
    
    // Grupo K
    'Portugal':        { home: '#006600', away: '#FFFFFF', stroke: '#FF0000' },
    'RD Congo':        { home: '#007FFF', away: '#FFCE00', stroke: '#CE1126' },
    'Uzbekistán':      { home: '#0099B5', away: '#FFFFFF', stroke: '#1EB53A' },
    'Colombia':        { home: '#FCD116', away: '#FFFFFF', stroke: '#003087' },
    
    // Grupo L
    'Inglaterra':      { home: '#FFFFFF', away: '#003DA5', stroke: '#CF081F' },
    'Croacia':         { home: '#FF0000', away: '#FFFFFF', stroke: '#171796' },
    'Ghana':           { home: '#006B3F', away: '#FFFFFF', stroke: '#FCD116' },
    'Panamá':          { home: '#D21034', away: '#FFFFFF', stroke: '#FFFFFF' },
};

function getKit(teamFullName) {
    const name = teamFullName.split(' ').slice(1).join(' ');
    return teamKits[name] || { home: '#888', away: '#FFF', stroke: '#444' };
}

function kitSVG(teamFullName, size = 20) {
    const kit = getKit(teamFullName);
    const h = kit.home;
    const s = kit.stroke;
    // Simple shirt shape SVG
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
      <path d="M9 2 L5 5 L2 4 L1 9 L5 10 L5 22 L19 22 L19 10 L23 9 L22 4 L19 5 L15 2 Q12 5 9 2Z" 
            fill="${h}" stroke="${s}" stroke-width="1.2"/>
      <path d="M9 2 Q12 5 15 2 L15 7 Q12 9 9 7 Z" fill="${s}" opacity="0.35"/>
    </svg>`;
}

// ======================================================
// DATOS DE GRUPOS
// ======================================================
const groupsData = {
    A: ['🇲🇽 México', '🇿🇦 Sudáfrica', '🇰🇷 Corea del Sur', '🇨🇿 Rep. Checa'],
    B: ['🇨🇦 Canadá', '🇧🇦 Bosnia y Herz.', '🇶🇦 Qatar', '🇨🇭 Suiza'],
    C: ['🇧🇷 Brasil', '🇲🇦 Marruecos', '🇭🇹 Haití','SCO Escocia'],
    D: ['🇺🇸 E. Unidos', '🇵🇾 Paraguay', '🇦🇺 Australia', '🇹🇷 Turquía'],
    E: ['🇩🇪 Alemania', '🇨 Curazao', '🇨🇮 Costa de Marfil', '🇪🇨 Ecuador'],
    F: ['🇳🇱 Países Bajos', '🇯🇵 Japón', '🇸🇪 Suecia', '🇹🇳 Túnez'],
    G: ['🇧🇪 Bélgica', '🇪🇬 Egipto', '🇮 Irán', '🇳🇿 Nueva Zelanda'],
    H: ['🇪🇸 España', '🇨🇻 Cabo Verde', '🇸🇦 Arabia Saudita', '🇺🇾 Uruguay'],
    I: ['🇫🇷 Francia', '🇸🇳 Senegal', '🇮🇶 Irak', '🇳🇴 Noruega'],
    J: ['🇦🇷 Argentina', '🇩🇿 Argelia', '🇦🇹 Austria', '🇯🇴 Jordania'],
    K: ['🇵🇹 Portugal', '🇨🇩 RD Congo', '🇺 Uzbekistán', '🇨🇴 Colombia'],
    L: ['ENG Inglaterra', '🇭🇷 Croacia', '🇬🇭 Ghana', '🇵🇦 Panamá']
};

// ======================================================
// ESTADO
// ======================================================
const state = {
    groups: {},
    thirdPlaces: [],
    winners: {}   // matchId => 'home' | 'away'
};

function initializeState() {
    Object.keys(groupsData).forEach(group => {
        state.groups[group] = {
            position1: null,
            position2: null,
            position3: null,
            thirdQualified: false,
            selections: []
        };
    });
}

// ======================================================
// BRACKET DATA — built fresh every render, winners stored separately
// ======================================================
function generateFullBracket() {
    const groups = state.groups;
    const qualifiedThirds = state.thirdPlaces.filter(tp => tp.qualified);
    let teams = [];
    
    Object.keys(groups).forEach(group => {
        if (groups[group].position1) teams.push({ team: groups[group].position1, seed: `1${group}` });
        if (groups[group].position2) teams.push({ team: groups[group].position2, seed: `2${group}` });
    });
    qualifiedThirds.forEach(tp => {
        teams.push({ team: tp.team, seed: `3${tp.group}` });
    });

    while (teams.length < 32) teams.push({ team: 'TBD', seed: 'TBD' });

    // Round of 16
    const roundOf16 = [];
    for (let i = 0; i < 16; i++) {
        roundOf16.push({
            id: `r16-${i}`,
            home: teams[i],
            away: teams[i + 16] || { team: 'TBD', seed: 'TBD' },
            nextMatchId: `qf-${Math.floor(i / 2)}`,
            nextSlot: i % 2 === 0 ? 'home' : 'away'
        });
    }

    // Quarters
    const quarterFinals = [];
    for (let i = 0; i < 8; i++) {
        const feedA = roundOf16[i * 2];
        const feedB = roundOf16[i * 2 + 1];
        quarterFinals.push({
            id: `qf-${i}`,
            home: resolveWinner(feedA),
            away: resolveWinner(feedB),
            nextMatchId: `sf-${Math.floor(i / 2)}`,
            nextSlot: i % 2 === 0 ? 'home' : 'away'
        });
    }

    // Semis — 4 matches (2 per side)
    const semiFinals = [];
    for (let i = 0; i < 4; i++) {
        const feedA = quarterFinals[i * 2];
        const feedB = quarterFinals[i * 2 + 1];
        semiFinals.push({
            id: `sf-${i}`,
            home: resolveWinner(feedA),
            away: resolveWinner(feedB),
            nextMatchId: `side-final-${Math.floor(i / 2)}`,  // ← Cambiado
            nextSlot: i % 2 === 0 ? 'home' : 'away'
        });
    }

    // NUEVA: Side Finals (2 matches) — ganadores de sf-0 vs sf-1, y sf-2 vs sf-3
    const sideFinals = [];
    for (let i = 0; i < 2; i++) {
        const feedA = semiFinals[i * 2];
        const feedB = semiFinals[i * 2 + 1];
        sideFinals.push({
            id: `side-final-${i}`,
            home: resolveWinner(feedA),
            away: resolveWinner(feedB),
            nextMatchId: 'final',
            nextSlot: i === 0 ? 'home' : 'away'
        });
    }

    // Final
    const final = {
        id: 'final',
        home: resolveWinner(sideFinals[0]),
        away: resolveWinner(sideFinals[1]),
    };

    return { roundOf16, quarterFinals, semiFinals, sideFinals, final };
}
// Given a match object (with .id, .home, .away), return the team that won,
// or TBD if no winner picked yet
function resolveWinner(match) {
    if (!match) return { team: 'TBD', seed: 'TBD' };
    const slot = state.winners[match.id];
    if (!slot) return { team: 'TBD', seed: 'TBD' };
    const winner = slot === 'home' ? match.home : match.away;
    return winner.team !== 'TBD' ? winner : { team: 'TBD', seed: 'TBD' };
}

// ======================================================
// SELECT WINNER
// ======================================================
window.selectWinner = function(matchId, slot) {
    // Build bracket to validate the match exists and get team
    const bracket = generateFullBracket();
    const allMatches = [
        ...bracket.roundOf16,
        ...bracket.quarterFinals,
        ...bracket.semiFinals,
        ...bracket.sideFinals,
        bracket.final
    ];
    const match = allMatches.find(m => m.id === matchId);
    if (!match) return;

    const selectedTeam = slot === 'home' ? match.home : match.away;
    if (selectedTeam.team === 'TBD') return;

    // Toggle — if same slot clicked again, deselect
    if (state.winners[matchId] === slot) {
        // Cascade-clear all downstream winners
        cascadeClearWinners(matchId, bracket);
        delete state.winners[matchId];
    } else {
        // If switching winner, cascade-clear downstream first
        if (state.winners[matchId]) {
            cascadeClearWinners(matchId, bracket);
        }
        state.winners[matchId] = slot;
    }

    renderBracket();
};

function cascadeClearWinners(matchId, bracket) {
    const allMatches = [
        ...bracket.roundOf16,
        ...bracket.quarterFinals,
        ...bracket.semiFinals,
        ...bracket.sideFinals,
        bracket.final
    ];
    const match = allMatches.find(m => m.id === matchId);
    if (!match || !match.nextMatchId) return;

    // Clear the next match winner and recurse
    const nextMatch = allMatches.find(m => m.id === match.nextMatchId);
    if (nextMatch && state.winners[nextMatch.id]) {
        cascadeClearWinners(nextMatch.id, bracket);
        delete state.winners[nextMatch.id];
    }
}

// ======================================================
// RENDER GROUPS
// ======================================================
function renderGroupIndicators() {
    const container = document.getElementById('groupIndicators');
    container.innerHTML = '';
    Object.keys(groupsData).forEach(group => {
        const indicator = document.createElement('div');
        indicator.className = 'group-indicator';
        indicator.textContent = group;
        indicator.dataset.group = group;
        indicator.addEventListener('click', () => scrollToGroup(group));
        container.appendChild(indicator);
    });
}

function scrollToGroup(group) {
    const element = document.getElementById(`group-${group}`);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderGroups() {
    const container = document.getElementById('groupsContainer');
    container.innerHTML = '';
    Object.keys(groupsData).forEach(group => {
        container.appendChild(createGroupCard(group));
    });
}

function createGroupCard(groupName) {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.id = `group-${groupName}`;

    const teams = groupsData[groupName];
    const groupState = state.groups[groupName];

    card.innerHTML = `
        <div class="group-header">
            <span class="group-name">GRUPO ${groupName}</span>
            <span class="group-counter${groupState.selections.length === 3 ? ' complete' : ''}">
                ${groupState.selections.length}/3
            </span>
        </div>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${(groupState.selections.length / 3) * 100}%"></div>
        </div>
        <div class="teams-list">
            ${teams.map((team, index) => createTeamItem(team, groupName, index)).join('')}
        </div>
    `;
    return card;
}

function createTeamItem(team, group, index) {
    const teamState = state.groups[group];
    const position = teamState.selections.indexOf(index);
    const isSelected = position !== -1;
    const posLabel = isSelected ? position + 1 : '';
    const posCls = isSelected ? `position-${position + 1}` : '';
    const flag = team.split(' ')[0];
    const name = team.split(' ').slice(1).join(' ');

    return `
        <div class="team-item ${isSelected ? 'selected' : ''} ${posCls}"
             data-group="${group}" data-index="${index}"
             onclick="toggleTeamSelection('${group}', ${index})">
            <div class="team-info">
                <span class="team-flag">${flag}</span>
                <span class="team-kit">${kitSVG(team, 18)}</span>
                <span class="team-name">${name}</span>
            </div>
            <div class="team-position">${posLabel}</div>
        </div>
    `;
}

window.toggleTeamSelection = function(group, index) {
    const groupState = state.groups[group];
    const currentIndex = groupState.selections.indexOf(index);

    if (currentIndex !== -1) {
        groupState.selections.splice(currentIndex, 1);
    } else {
        if (groupState.selections.length < 3) {
            groupState.selections.push(index);
        } else {
            groupState.selections[2] = index;
        }
    }

    updateGroupState(group);
    // Reset all bracket winners when group changes
    state.winners = {};
    renderGroups();
    updateGroupIndicators();
    updateThirdPlaceTable();
    renderBracket();
};

function updateGroupState(group) {
    const groupState = state.groups[group];
    const teams = groupsData[group];
    groupState.position1 = groupState.selections[0] !== undefined ? teams[groupState.selections[0]] : null;
    groupState.position2 = groupState.selections[1] !== undefined ? teams[groupState.selections[1]] : null;
    groupState.position3 = groupState.selections[2] !== undefined ? teams[groupState.selections[2]] : null;
}

function updateGroupIndicators() {
    Object.keys(state.groups).forEach(group => {
        const indicator = document.querySelector(`.group-indicator[data-group="${group}"]`);
        if (!indicator) return;
        const groupState = state.groups[group];
        indicator.classList.toggle('completed', groupState.selections.length === 3);
        indicator.classList.toggle('active', groupState.selections.length > 0 && groupState.selections.length < 3);
    });
}

// ======================================================
// THIRD PLACE TABLE
// ======================================================
function updateThirdPlaceTable() {
    const thirdPlaces = [];
    Object.keys(state.groups).forEach(group => {
        if (state.groups[group].position3) {
            thirdPlaces.push({
                group,
                team: state.groups[group].position3,
                qualified: state.groups[group].thirdQualified || false
            });
        }
    });
    state.thirdPlaces = thirdPlaces;
    renderThirdPlaceTable();
}

function renderThirdPlaceTable() {
    const container = document.getElementById('thirdPlaceGrid');
    const thirdPlaces = state.thirdPlaces;
    const qualifiedCount = thirdPlaces.filter(tp => tp.qualified).length;

    document.getElementById('thirdPlaceCounter').textContent = `${qualifiedCount}/8 clasificados`;
    document.getElementById('thirdPlaceCounter').className = `third-place-counter${qualifiedCount === 8 ? ' qualified' : ''}`;

    if (thirdPlaces.length === 0) {
        container.innerHTML = '<p class="empty-msg">Seleccioná los terceros de cada grupo para ver la tabla</p>';
        return;
    }

    const qualified = thirdPlaces.filter(tp => tp.qualified);
    const nonQualified = thirdPlaces.filter(tp => !tp.qualified);

    container.innerHTML = `
        <div class="third-place-column">
            <div class="third-place-title">✅ Clasificados (${qualifiedCount}/8)</div>
            ${qualified.length === 0 ? '<p class="empty-msg small">Hacé clic en los equipos para clasificarlos</p>' : ''}
            ${qualified.map(item => `
                <div class="third-place-item qualified" onclick="toggleThirdPlace('${item.group}')">
                    <div class="team-info">
                        <span class="team-flag">${item.team.split(' ')[0]}</span>
                        <span class="team-kit">${kitSVG(item.team, 18)}</span>
                        <span>${item.team.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:.4rem">
                        <span class="group-label">${item.group}</span>
                        <span class="checkmark">✓</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="third-place-column">
            <div class="third-place-title">⏳ Disponibles</div>
            ${nonQualified.length === 0 ? '<p class="empty-msg small">Todos clasificados</p>' : ''}
            ${nonQualified.map(item => `
                <div class="third-place-item" onclick="toggleThirdPlace('${item.group}')">
                    <div class="team-info">
                        <span class="team-flag">${item.team.split(' ')[0]}</span>
                        <span class="team-kit">${kitSVG(item.team, 18)}</span>
                        <span>${item.team.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <span class="group-label">${item.group}</span>
                </div>
            `).join('')}
        </div>
    `;
}

window.toggleThirdPlace = function(group) {
    const thirdPlace = state.thirdPlaces.find(tp => tp.group === group);
    if (!thirdPlace) return;
    const qualifiedCount = state.thirdPlaces.filter(tp => tp.qualified).length;

    if (thirdPlace.qualified) {
        thirdPlace.qualified = false;
    } else {
        if (qualifiedCount >= 8) {
            alert('Ya hay 8 terceros clasificados. Desclasificá uno primero.');
            return;
        }
        thirdPlace.qualified = true;
    }
    state.groups[group].thirdQualified = thirdPlace.qualified;
    state.winners = {}; // Reset bracket on change
    renderThirdPlaceTable();
    renderBracket();
};

// ======================================================
// BRACKET RENDER
// ======================================================
function renderBracket() {
    const container = document.getElementById('bracketContainer');

    let qualifiedTeams = 0;
    Object.values(state.groups).forEach(g => {
        if (g.position1) qualifiedTeams++;
        if (g.position2) qualifiedTeams++;
    });
    qualifiedTeams += state.thirdPlaces.filter(tp => tp.qualified).length;

    if (qualifiedTeams < 32) {
        container.innerHTML = `
            <div class="bracket-placeholder">
                <div class="bracket-placeholder-icon">⚽</div>
                <p>Completá la fase de grupos para ver el cuadro</p>
                <div class="bracket-progress-bar-wrap">
                    <div class="bracket-progress-inner" style="width:${(qualifiedTeams/32)*100}%"></div>
                </div>
                <p class="bracket-count">${qualifiedTeams}/32 equipos clasificados</p>
            </div>
        `;
        return;
    }

    const bracket = generateFullBracket();
    container.innerHTML = renderBracketHTML(bracket);
}

function renderBracketHTML(bracket) {
    const r16L = bracket.roundOf16.slice(0, 8);
    const r16R = bracket.roundOf16.slice(8, 16);
    const qfL  = bracket.quarterFinals.slice(0, 4);
    const qfR  = bracket.quarterFinals.slice(4, 8);
    const sfL  = bracket.semiFinals.slice(0, 2);
    const sfR  = bracket.semiFinals.slice(2, 4);
    const sideFinalL = bracket.sideFinals.slice(0, 1);  // 1 partido (izquierda)
    const sideFinalR = bracket.sideFinals.slice(1, 2);  // 1 partido (derecha)
    
    return `
        <div class="bracket-side left">
            ${renderRound('16AVOS', r16L)}
            ${renderRound('OCTAVOS', qfL)}
            ${renderRound('CUARTOS', sfL)}
            ${renderRound('SEMIFINAL', sideFinalL)}
        </div>
        <div class="bracket-center">
            <div class="bracket-trophy">🏆</div>
            <div class="bracket-final-label">FINAL</div>
            ${renderFinalMatch(bracket.final)}
        </div>
        <div class="bracket-side right">
            ${renderRound('SEMIFINAL', sideFinalR)}
            ${renderRound('CUARTOS', sfR)}
            ${renderRound('OCTAVOS', qfR)}
            ${renderRound('16AVOS', r16R)}
        </div>
    `;
}

function renderRound(title, matches) {
    const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `
        <div class="bracket-round round-${slug}">
            <div class="bracket-round-title">${title}</div>
            <div class="bracket-round-matches">
                ${matches.map(m => renderMatch(m)).join('')}
            </div>
        </div>
    `;
}

function renderMatch(match) {
    const winnerSlot = state.winners[match.id];
    const homeWon = winnerSlot === 'home';
    const awayWon = winnerSlot === 'away';
    const homeTBD = match.home.team === 'TBD';
    const awayTBD = match.away.team === 'TBD';

    return `
        <div class="bracket-match ${winnerSlot ? 'winner-selected' : ''}">
            <div class="bracket-team ${homeTBD ? 'tbd' : ''} ${homeWon ? 'selected' : ''}"
                 onclick="${homeTBD ? '' : `selectWinner('${match.id}','home')`}">
                <div class="bracket-team-info">
                    ${!homeTBD ? `<span class="team-flag">${match.home.team.split(' ')[0]}</span>` : ''}
                    ${!homeTBD ? kitSVG(match.home.team, 16) : ''}
                    <span>${homeTBD ? 'Por definir' : match.home.team.split(' ').slice(1).join(' ')}</span>
                </div>
                <div class="winner-dot ${homeWon ? 'active' : ''}"></div>
            </div>
            <div class="bracket-divider"></div>
            <div class="bracket-team ${awayTBD ? 'tbd' : ''} ${awayWon ? 'selected' : ''}"
                 onclick="${awayTBD ? '' : `selectWinner('${match.id}','away')`}">
                <div class="bracket-team-info">
                    ${!awayTBD ? `<span class="team-flag">${match.away.team.split(' ')[0]}</span>` : ''}
                    ${!awayTBD ? kitSVG(match.away.team, 16) : ''}
                    <span>${awayTBD ? 'Por definir' : match.away.team.split(' ').slice(1).join(' ')}</span>
                </div>
                <div class="winner-dot ${awayWon ? 'active' : ''}"></div>
            </div>
        </div>
    `;
}

function renderFinalMatch(final) {
    const winnerSlot = state.winners['final'];
    const homeWon = winnerSlot === 'home';
    const awayWon = winnerSlot === 'away';
    const homeTBD = final.home.team === 'TBD';
    const awayTBD = final.away.team === 'TBD';

    const champion = winnerSlot
        ? (winnerSlot === 'home' ? final.home : final.away)
        : null;

    return `
        <div class="bracket-final">
            ${champion && champion.team !== 'TBD' ? `
                <div class="champion-banner">
                    <div class="champion-crown">👑</div>
                    <div class="champion-kit">${kitSVG(champion.team, 36)}</div>
                    <div class="champion-flag">${champion.team.split(' ')[0]}</div>
                    <div class="champion-name">${champion.team.split(' ').slice(1).join(' ')}</div>
                    <div class="champion-label">CAMPEÓN</div>
                </div>
            ` : ''}
            <div class="bracket-team ${homeTBD ? 'tbd' : ''} ${homeWon ? 'selected' : ''}"
                 onclick="${homeTBD ? '' : `selectWinner('final','home')`}">
                <div class="bracket-team-info">
                    ${!homeTBD ? `<span class="team-flag">${final.home.team.split(' ')[0]}</span>` : ''}
                    ${!homeTBD ? kitSVG(final.home.team, 20) : ''}
                    <span>${homeTBD ? 'Por definir' : final.home.team.split(' ').slice(1).join(' ')}</span>
                </div>
                <div class="winner-dot ${homeWon ? 'active' : ''}"></div>
            </div>
            <div class="bracket-divider"></div>
            <div class="bracket-team ${awayTBD ? 'tbd' : ''} ${awayWon ? 'selected' : ''}"
                 onclick="${awayTBD ? '' : `selectWinner('final','away')`}">
                <div class="bracket-team-info">
                    ${!awayTBD ? `<span class="team-flag">${final.away.team.split(' ')[0]}</span>` : ''}
                    ${!awayTBD ? kitSVG(final.away.team, 20) : ''}
                    <span>${awayTBD ? 'Por definir' : final.away.team.split(' ').slice(1).join(' ')}</span>
                </div>
                <div class="winner-dot ${awayWon ? 'active' : ''}"></div>
            </div>
        </div>
    `;
}

// ======================================================
// PERSIST
// ======================================================
function saveState() {
    try {
        localStorage.setItem('mundial2026_state', JSON.stringify({ groups: state.groups, winners: state.winners }));
    } catch(e) {}
}

function loadState() {
    try {
        const saved = localStorage.getItem('mundial2026_state');
        if (saved) {
            const s = JSON.parse(saved);
            if (s.groups) Object.assign(state.groups, s.groups);
            if (s.winners) Object.assign(state.winners, s.winners);
            // Rebuild thirdPlaces from loaded groups
            updateThirdPlaceTable();
            return true;
        }
    } catch(e) {}
    return false;
}

// ======================================================
// INIT
// ======================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeState();
    const loaded = loadState();
    renderGroupIndicators();
    renderGroups();
    updateGroupIndicators();
    if (!loaded) updateThirdPlaceTable();
    renderBracket();
});

window.addEventListener('beforeunload', saveState);