"""Extract the 1Tradie producer flow (ProducerMasterFlowNavigator.live) stage fields into src/oneTradie/stages.json.
Read-only on the 1Tradie source. Run: python3 scripts/extract_1tradie.py <1tradie producer-dashboard dir>"""
import json, re, sys, os
D = sys.argv[1] if len(sys.argv) > 1 else '/workspace/tradie-unified/apps/mobile/src/producer-flow-1t/app/components/producer-dashboard'
STAGES = [
 ('dashboard','setup','Dashboard','AI overview & quick actions','../ProducerAIDashboardComplete'),
 ('profile','setup','Producer Profile','Identity & documents','ProducerProfile'),
 ('crop-selection','farm','Crop Selection','AI-powered recommendations','CropSelectionWithAI'),
 ('activities','farm','Log Activities','Ploughing, irrigation, etc.','ActivityLoggerEnhanced'),
 ('input-cost','farm','Input & Cost','Cost tracking by activity','InputCostTrackerEnhanced'),
 ('crop-journaling','farm','Crop Lifecycle','Monitor & journal progress','CropJournalingTokenization'),
 ('crop-health','farm','Crop Health & AI','AI-powered health monitoring','CropHealthMonitor'),
 ('harvest-listing','harvest','Harvest & Listing','Record harvest & lots','HarvestCommodityListing'),
 ('lot-management','harvest','Lot Management','Create & manage lots','CreateLotWorkflow'),
 ('sampling-quality','quality','Sampling & Quality','Quality verification','SamplingQualityCheck'),
 ('ai-quality','quality','AI Quality Check','Grok AI assessment','EnhancedQualityCheckWithAI'),
 ('grading','quality','Grading','Final lot grading & grades','GradingCompletionScreen'),
 ('traceability','quality','QR & Provenance','Traceability record','ProvenanceTracker'),
 ('tokenization','quality','Tokenization','Digital lot identity','LotCreationTokenizationWorkflow'),
 ('storage-sell-decision','decision','Store or Sell','Choose your path','StorageSellDecisionScreen'),
 ('storage','decision','Storage','Storage facility selection','EnhancedStorageSelectionScreen'),
 ('marketplace-browse','selling','Marketplace','Browse markets & agents','MarketplaceAgentBrowsingScreen'),
 ('matchmaking','selling','Matchmaking','Match with buyers','MatchmakingScreen'),
 ('commission-agent','selling','Commission Agent','Agent engagement & deal','CommissionAgentEngagementScreen'),
 ('buyer-verification','selling','Buyer Verification','Verify buyer token','BuyerVerificationView'),
 ('order-confirmation','selling','Order Confirmation','OTP & media confirmation','OrderConfirmationVerificationScreen'),
 ('market-auction','transaction','Market & Auction','Live bidding & price','MarketDisplayAuction'),
 ('transport-booking','transaction','Transport','Arrange logistics','TransportBooking'),
 ('destination-receiving','transaction','Destination','OTP confirmation','DestinationReceiving'),
 ('weighing-confirmation','transaction','Weighing & Settlement','Final payment','WeighingConfirmation'),
 ('complete','complete','Complete','History & AI intelligence',None),
]
def clean(s): return re.sub(r'\s+',' ',re.sub(r'\{[^}]*\}','',s)).strip(' :*')
out=[]
for sid,phase,title,desc,comp in STAGES:
    fields=[];actions=[];sections=[]
    if comp:
        src=open(os.path.join(D,comp+'.tsx'),encoding='utf8').read()
        seen=set()
        # labels -> text fields; selects -> dropdowns with options
        for m in re.finditer(r'<[Ll]abel[^>]*>\s*([^<{]{2,60})<',src):
            l=clean(m.group(1))
            if l and l.lower() not in seen: seen.add(l.lower()); fields.append({'label':l,'type':'text'})
        for m in re.finditer(r'placeholder="([^"]{2,60})"',src):
            l=clean(m.group(1))
            if l and l.lower() not in seen and len(fields)<14: seen.add(l.lower()); fields.append({'label':l,'type':'text'})
        if len(fields)<4:
            for m in re.finditer(r"(?:label|title|name):\s*'([A-Z][^']{2,40})'",src):
                l=clean(m.group(1))
                if l.lower() not in seen and len(fields)<8: seen.add(l.lower()); fields.append({'label':l,'type':'check'})
        opts=[clean(x) for x in re.findall(r'<(?:SelectItem|option)[^>]*>([^<{]{1,40})</(?:SelectItem|option)>',src)]
        if opts:
            fields.append({'label':'Select','type':'select','options':list(dict.fromkeys(o for o in opts if o))[:12]})
        for m in re.finditer(r'<(?:h2|h3|CardTitle)[^>]*>([^<{]{3,50})<',src):
            t=clean(m.group(1))
            if t and t not in sections: sections.append(t)
        for m in re.finditer(r'<(?:Button|BeautifulButton)[^>]*>\s*(?:<[^>]+/>\s*)?([A-Za-z][^<{]{2,32})<',src):
            a=clean(m.group(1))
            if a and a not in actions: actions.append(a)
        if re.search(r'otp|OTP',src) and not any('otp' in f['label'].lower() for f in fields):
            fields.append({'label':'OTP','type':'otp'})
    for f in fields:
        l=f['label'].lower()
        if f['type']=='text' and re.search(r'(qty|quantity|weight|kg|price|amount|cost|bags|acre|area|rate|moisture|%)',l): f['type']='number'
        if f['type']=='text' and re.search(r'(otp|code)',l) and 'pin' not in l: f['type']='otp'
        if f['type']=='text' and re.search(r'(phone|mobile)',l): f['type']='phone'
    out.append({'id':sid,'phase':phase,'title':title,'description':desc,'source':(comp or 'CompletionScreen')+'.tsx','fields':fields[:14],'sections':sections[:8],'actions':actions[:8]})
os.makedirs('src/oneTradie',exist_ok=True)
json.dump(out,open('src/oneTradie/stages.json','w'),indent=1,ensure_ascii=False)
for s in out: print(s['id'],len(s['fields']),[f['label'] for f in s['fields']][:6])
